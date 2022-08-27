import { Html, Head, Main, NextScript } from 'next/document'
import Layer from 'src/components/Layer'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
          
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
