import React from 'react'
import Layout from '../components/Layout'
import { Display } from '../components/Display'
import { DataProvider } from '../Context/DataContext'


const index = () => {
  return (
    <Layout home>
      <DataProvider<any> requestMetas={{
        url: "https://dog.ceo/api/breeds/image/random",
        options: {
          method: "get",
          // data: JSON.stringify({})
        }
      }}>
        <Display />
      </DataProvider>
    </Layout>
  )
}

export default index
