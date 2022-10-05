import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Posts from '../components/home/posts'

const HomePage = () => {
  return (
    <>
      <Layout>
        <div>
          <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
        </div>
        <Posts/>
      </Layout>
    </>
  )
}

export default HomePage