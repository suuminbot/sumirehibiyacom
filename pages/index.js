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
          <div className="text-center mb-8">
            <Image
              src="/assets/profile@2x.png"
              alt="hoge"
              width={200}
              height={200}
            />
          </div>
          <div className="w-3/4 m-auto leading-7 index">
            <p>
              日比谷すみれといいます。デジタルプロダクトづくりのあらゆるデザイン活動に関わるプロダクトデザイナーです。
              <br />
              現在は
              <a
                href="https://10x.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社10X
              </a>
              に所属し、Stailerの開発に携わっています。
            </p>
            <p>
              10X入社以前は、
              <a
                href="https://corp.funds.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ファンズ株式会社
              </a>
              に創業期から参画し、資産運用サービス「
              <a
                href="https://funds.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Funds
              </a>
              」全般のデザイン・フロントエンドのマークアップを行っていました。その前は
              <a
                href="https://goodpatch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社グッドパッチ
              </a>
              でシニアUIデザイナー・PMとして様々な企業のプロダクト開発に関わっていました。
            </p>
            <p>
              デザインやプロダクトに関することを
              <a
                href="https://twitter.com/suuminbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                @suuminbot
              </a>
              というTwitterアカウントで発信しています。
            </p>
            <p>
              趣味はサウナ、旅行。ファッションやコスメ、美味しいご飯も大好きでそういったことは
              <a
                href="https://twitter.com/another_suumin"
                target="_blank"
                rel="noopener noreferrer"
              >
                ゆるいアカウント
              </a>
              で気ままに投稿しています。
            </p>
            <h3>経歴</h3>
            <dl>
              <dt>2021/02~</dt>
              <dd>株式会社10X デザイナー</dd>
            </dl>
            <dl>
              <dt>2017/06~2021/01</dt>
              <dd>ファンズ株式会社 UIデザイナー/PM</dd>
            </dl>
            <dl>
              <dt>2015/01~2017/06</dt>
              <dd>株式会社グッドパッチ シニアUIデザイナー/PM</dd>
            </dl>
            <dl>
              <dt>2013/9</dt>
              <dd>早稲田大学商学部卒業</dd>
            </dl>
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
