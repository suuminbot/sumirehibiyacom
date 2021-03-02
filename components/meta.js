import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#1F2937" />
      <meta name="theme-color" content="#1F2937" />
      <meta name="description" content={`${CMS_NAME}`} />
    </Head>
  )
}
