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
          自然言語処理を利用したBotAIサービスの構築などの開発に携わってきました。AI開発のほかにもウェブ開発も可能です。</p>
          <h3>スキル（言語、フレームワークなど）</h3>
          <p>Python、PHP、JavaScript</p>
          <p>TensorFlow、PyTorch、Next.jsなど</p>
          <h3>経歴</h3>
          <ul className={styles.ul}>
            <li>2013年 北海道札幌琴似工業高等学校 電子機械化 卒業</li>
            <li>2018年 北海道情報大学経営情報学部 システム情報学科 卒業</li>
            <li>2018-2019年 AIQ株式会社 機械学習エンジニア</li>
            <li>2019-2020年 株式会社アイデミー データサイエンティスト、コンテンツ編集員</li>
            <li>2020年- 個人事業主（AI、機械学習、数理最適化、フロントエンドなど）</li>
          </ul>
        
          {/* <h3>サービス</h3>
          <a href="https://otooto.dev">テキスト読み上げサービス「Oto」</a> */}
          <h3>ブログ</h3>
          <ul className={styles.ul}>
            <li><a href="https://kasupekira.com">技術ブログ</a></li>
            <li><a href="https://qiita.com/NoriakiOshita">Qiita</a></li>
          </ul>
          <h3>お問い合わせ</h3>
          <p>oshita-n@whispon.com</p>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home
