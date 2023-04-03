import { Html, Head, Main, NextScript } from 'next/document'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Password Generator</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
