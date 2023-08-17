import React, { Suspense } from 'react'
import Head from "next/head"
import Link from "next/link"
import { HttpLink, split, InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

type LayoutProps = Readonly<{
  children: JSX.Element;
  home: boolean
}>

const http = new HttpLink({
  uri: "http://localhost:8080/v1/graphql"
})
const wsGql = typeof window !== "undefined" ? new GraphQLWsLink(createClient({
  url: "ws://localhost:8080/v1/graphql"
  // connectionParams: {
  //   authToken: auth
  // }
})) : null;
// allows subscriptions to use ws and others to use http
const splitLink = typeof window !== "undefined" && wsGql !== null ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsGql,
  http
) : http

const cache = new InMemoryCache({
  typePolicies: {
    Subscription: {
      fields: {
        customers_stream: {
          read(value) {
            console.log(value)
            return value?.email_address?.toUpperCase()
          },
          merge(ex, incoming) {
            const existing = ex || []
            console.log(ex, incoming)
            return [...existing, ...incoming]
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  cache,
  link: splitLink,
})

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta name="description" content="example Hasura/Next app" />
      </Head>
      <header>
        {
          home ? (
            <>
              Welcome Home
            </>
          ) :
            (
              <>
                A galaxy far far away
              </>
            )
        }
      </header>
      <main>
        <ApolloProvider client={client}>
          <Suspense fallback={<>Loading...</>} >
            {children}
          </Suspense>
        </ApolloProvider>
      </main>
      {!home && (
        <Link href="/">Back to Home</Link>
      )}
    </div>
  )
}

export default Layout