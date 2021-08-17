import "bootstrap/dist/css/bootstrap.min.css"
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import React, {useState, useEffect} from "react"
import Loading from '../components/loading'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Router from "next/router";

library.add(fab, faEnvelope, faChevronDown, faChevronUp)

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
