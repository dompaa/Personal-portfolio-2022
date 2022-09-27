import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dominik&apos;s portfolio</title>
      </Head>

      <h1>Lets build  an AWESOME portfolio</h1>
    </div>
  )
}

export default Home
