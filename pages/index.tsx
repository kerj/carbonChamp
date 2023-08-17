import React from 'react'
import Layout from '../components/Layout'
import { Display } from '../components/Display'
import axios from 'axios'


export async function getStaticProps() {
  const req = {
    // url: "http://localhost:8080/v1/graphql",
    // options: {
    //   method: "post",
    //   data: JSON.stringify({
    //     query: `
    //           query GetCustomers {
    //             customers(limit: 19, where: {first_name: {_like: "Le%"}}) {
    //               email_address
    //               first_name
    //               last_name
    //             }
    //           }
    //         `,
    //     operationName: "GetCustomers"
    //   })
    // }
    url: '',
    options: {}
  }

  // const result = await axios(req.url, { ...req.options }).then(res => {
  //   return res.data.data
  // });
  return {
    props: {
      initData: {customers: []},
    }
  }
}

const index = ({initData}) => {
  return (
    <Layout home>
      <Display initData={initData}></Display>
    </Layout>
  )
}

export default index
