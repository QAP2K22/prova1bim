import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Construção de FrontEnd - Prova 1Bim</title>
      </Head>
      <Component {...pageProps} />

    </>
  )
}