import Image from 'next/image'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="text-center mb-10">
            <Image
              src="/assets/profile@2x.png"
              alt="hoge"
              width={200}
              height={200}
            />
          </div>
          <div className="w-3/4 m-auto">
            <h2>👋</h2>
            <p>プロダクトデザイナーの日比谷すみれです。</p>
            <p></p>
            <h3>注意事項</h3>
            <p>
              このサイトでは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムを利用します。
            </p>
          </div>
        </Container>
      </Layout>
    </>
  )
}
