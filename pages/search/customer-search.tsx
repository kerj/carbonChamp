import Head from 'next/head';
import React from 'react'
import Layout from '../../components/Layout';
import { Search } from '../../components/Search';

const CusotmerSearch = () => {
  return (
    <Layout home={false}>
      <>
        <Head>
          <title>Customer Search</title>
        </Head>
        <Search />
      </>
    </Layout>
  )
}

export default CusotmerSearch;