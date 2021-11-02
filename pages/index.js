import Head from 'next/head'
import { useEffect } from 'react'
import NavBar from '../components/nav-bar'
import Intro from '../components/intro'
import What from '../components/what'
import HowWhere from '../components/how-where'
import Premining from '../components/premining'
import RoadMap from '../components/roadmap'
import Team from '../components/team'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import Video from '../components/Video'
import {
  videoDesktopMp4,
  videoMobileMp4,
} from "../assets/video";

const videoSrc = {
      mobile: [
          {
              src: videoMobileMp4,
              type: 'video/webm'
          }
      ],
      desktop: [
          {
              src: videoDesktopMp4,
              type: 'video/webm'
          }
      ]
}
export default function HomePage() {

  return (
    <div>
      <Head>
        <title>SolarMineX</title>
        <link rel="icon" href="/assets/img/favicon96x96.png" type="image/png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />
      <Video source={videoSrc} />
      {/* <Intro /> */}
      <What />
      <HowWhere/>
      <Premining/>
      <RoadMap/>
      <Team/>
      <FAQ/>
      <Footer />
    </div>
  )
}
