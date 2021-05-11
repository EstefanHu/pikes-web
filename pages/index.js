import React from 'react'
import Head from 'next/head'

import Header from './../components/Header'

import styles from './../styles/Index.module.scss'

const Index = () => {
  return <div className={styles.Header}>
    <Head>
      <title>Projekt:Pikes</title>
    </Head>

    <Header />

    <section className={styles.Hero}>
      <h1></h1>
    </section>
  </div>
}

export default Index