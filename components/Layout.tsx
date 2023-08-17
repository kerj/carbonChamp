import React, { Suspense } from 'react'
import Head from "next/head"
import Link from "next/link"

type LayoutProps = Readonly<{
  children: JSX.Element;
  home: boolean
}>

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
          <Suspense fallback={<>Loading...</>} >
            {children}
        </Suspense>
      </main>
      {!home && (
        <Link href="/">Back to Home</Link>
      )}
    </div>
  )
}

export default Layout