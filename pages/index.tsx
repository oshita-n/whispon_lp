import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { animate } from "motion"

if (process.browser) {
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.contents}>
        <Header />
          <p>
          禅AIは、AIを使って人々の生活を楽しくしていくために存在しています。
          </p>
          <h3>活動内容</h3>
          <ul className={styles.ul}>
            <li>AI技術の議論の場を提供（Discord）</li>
            <li>OSSソフトウェアの提供</li>
            <li>勉強会の実施</li>
          </ul>
          
          <h3>Discord</h3>
          <p>ご自由にdiscordサーバーにお入りください。<br/><a href="https://discord.gg/fZUDURhG3w">https://discord.gg/fZUDURhG3w</a></p>
          
          <h3>お問合せ</h3>
          <p>禅AI 代表 大下範晃<br/>oshita-n@whispon.com</p>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home
