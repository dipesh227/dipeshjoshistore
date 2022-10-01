import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dipesh</title>
        <meta name="description" content="Shop any thing what u wants" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header />
      <Navbar />
      < Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
