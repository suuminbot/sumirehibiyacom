import '../styles/globals.css'
import Head from 'next/head'

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
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Noto+Sans+JP:wght@300;700&family=Open+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
