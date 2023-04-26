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
          勤務表の作成アルゴリズム、点群も含めたさまざまなデータのセグメンテーション、生成AIなどを開発してきました。
          <br/>
          お気軽にお問合せください。
          </p>
          <h3>経歴</h3>
          <ul className={styles.ul}>
            <li>2018年 北海道情報大学経営情報学部 システム情報学科 卒業</li>
            <li>2018-2019年 AIQ株式会社 機械学習エンジニア</li>
            <li>2019年 株式会社調和技研 機械学習エンジニア</li>
            <li>2019-2020年 株式会社アイデミー データサイエンティスト、コンテンツ編集員</li>
            <li>2020-2022年6月 個人事業主（AI、機械学習、数理最適化、フロントエンドなど）</li>
            <li>2022年12月 Whispon合同会社 休業</li>
            <li>2022年12月~ 禅AI</li>
          </ul>
        
          {/* <h3>サービス</h3>
          <a href="https://otooto.dev">テキスト読み上げサービス「Oto」</a> */}
          <h3>ブログ</h3>
          <ul className={styles.ul}>
            <li><a href="https://noriakioshita.com/">ブログ</a></li>
            <li><a href="https://huggingface.co/oshita-n">HuggingFace</a></li>
            <li><a href="https://qiita.com/NoriakiOshita">Qiita</a></li>
          </ul>
          <h3>お問合せ</h3>
          <p>禅AI 大下範晃<br/>oshita-n@whispon.com</p>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home
