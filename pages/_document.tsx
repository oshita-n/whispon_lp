import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* OGP タグ */}
          <meta property="og:title" content="禅AI" />
          <meta property="og:description" content="禅AIでは、AI開発をしています。" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://whispon.com/" />
          <meta property="og:image" content="https://whispon.com/images/zenAI.png" />
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