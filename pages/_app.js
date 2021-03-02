import Router from 'next/router'
import Head from 'next/head'
import '../styles/globals.css'

// GA読み込み
import * as gtag from '../lib/gtag'
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

// FontAwesome読み込み
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faGithub, faInstagram)

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
