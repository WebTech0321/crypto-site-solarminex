import Head from 'next/head'
import { useEffect } from 'react'
import NavBar from '../components/nav-bar'
import Intro from '../components/intro'
import Features from '../components/features'
import Specification from '../components/specification'
import HowToUse from '../components/how-to-use'
import SolarSystem from '../components/solar-system'
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
      <Intro />
      <Features />
      <Specification />
      <HowToUse />
      <SolarSystem/>
      <Footer />
    </div>
  )
}
