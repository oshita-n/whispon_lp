import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Header: NextPage = () => {
  return (
    <div>
      <Head>
        <title>禅AI</title>
        <meta name="description" content="禅AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header_logo}>
        <img src="/zenAI.png" width="160px" />
      </header>
    </div>
  )
}

export default Header
