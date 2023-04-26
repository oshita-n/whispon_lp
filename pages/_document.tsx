import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* OGP タグ */}
          <meta property="og:title" content="禅AI" />
          <meta property="og:description" content="生きることが楽しくなるAI技術を目指して" />
          <meta property="og:site_name" content="禅AI" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://whispon.com/" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://whispon.com/images/zenai_ogp.png" />
          <meta name="twitter:image" content="https://whispon.com/images/zenai_ogp.png" />
          <meta name="twitter:description" content="禅AI" />
          <meta name="twitter:title" content="生きることが楽しくなるAI技術を目指して" />
          {/* OGP タグ ここまで */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
