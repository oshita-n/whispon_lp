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
      <Header />
      <main className={styles.main}>
        <div className={styles.contents}>
          <h2>大下範晃（NoriakiOshita）</h2>
          <p>フリーランスのAIエンジニアとして働いています。<br />
          メタヒューリスティックスを使ったシフト作成AI、図面AI、電力需要予測のデータ分析、<br />
          自然言語処理を利用したBotAIサービスの構築などの開発に携わってきました。</p>
          <h3>経歴</h3>
          <ul className={styles.ul}>
            <li>2013年 北海道札幌琴似工業高等学校 電子機械化 卒業</li>
            <li>2018年 北海道情報大学経営情報学部 システム情報学科 卒業</li>
            <li>2018-2019年 AIQ株式会社 機械学習エンジニア</li>
            <li>2019-2020年 株式会社アイデミー データサイエンティスト、コンテンツ編集員</li>
            <li>2020年- 個人事業主（AI、機械学習、数理最適化、フロントエンドなど）</li>
          </ul>
        </div>
        <div className={styles.contents}>
          <h2>サービス</h2>
          <a href="https://otooto.dev">テキスト読み上げサービス「Oto」</a>
        </div>
        <div className={styles.contents}>
          <h2>ブログ</h2>
          <a href="https://qiita.com/NoriakiOshita">Qiitaに書いた記事</a>
        </div>
        <div className={styles.contents}>
          <h2>お問い合わせ</h2>
          <p>oshita-n@whispon.com</p>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home
