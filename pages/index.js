import Head from 'next/head'
import { useEffect } from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

export default function HomePage() {

  return (
    <div>
      <Head>
        <title>SolarMineX</title>
        <link rel="icon" href="/assets/img/favicon96x96.png" type="image/png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />
      {/* <Features />
      <Partners />
      <Description />
      <Answers />
      <Subscribe /> */}
      <Footer />
    </div>
  )
}
