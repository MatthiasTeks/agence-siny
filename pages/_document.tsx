import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.google.com/recaptcha/api.js?&render=explicit"
          strategy="beforeInteractive"
          async
          defer
        ></Script>
      </body>
    </Html>
  )
}