import Head from 'next/head'
import { Fragment } from 'react'
import { NextPageWithLayout } from '~/types/common.types'

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - WebApp - 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>DaftAcademy - WebApp - 2022</h1>
      </div>

    </Fragment>
  )
}
Home.getLayout = (page) => {
  return<div>{page}</div>
}

export default Home
