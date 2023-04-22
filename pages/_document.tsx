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
          <meta property="og:title" content="prototype" />
          <meta property="og:description" content="prototypeで生きることが楽しくなるプロダクト開発" />
          <meta property="og:site_name" content="prototype" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://whispon.com/" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://whispon.com/images/prototype_ogp.png" />
          <meta name="twitter:image" content="https://whispon.com/images/prototype_gp.png" />
          <meta name="twitter:description" content="prototype" />
          <meta name="twitter:title" content="prototypeで生きることが楽しくなるプロダクト開発" />
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
