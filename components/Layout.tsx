import React, { Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from '@emotion/styled'

type LayoutProps = Readonly<{
  children: JSX.Element
  home: boolean
}>

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta name="description" content="example Hasura/Next app" />
      </Head>
      <main>
        <Title>Carbon Champ</Title>
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </main>
      {!home && <Link href="/">Back to Home</Link>}
    </div>
  )
}

export default Layout

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-style: italic;
`
