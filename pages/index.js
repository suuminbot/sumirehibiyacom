import Image from 'next/image'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Header />

          <div>
            <div className="text-center mb-10">
              <Image src="/assets/profile@2x.png" alt="hoge" width={200} height={200} />
            </div>
            <h2>日比谷 すみれ</h2>
            <p>プロダクトデザイナー</p>
            <h3>こんにちは</h3>
            <p>ここに自己紹介を書く</p>
            <h3>リンク</h3>
            <p>リンクなど</p>
            <h3>注意事項</h3>
            <p>
              @suuminbot
              は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
          </div>
        </Container>
      </Layout>
    </>
  )
}
