import type { Metadata } from 'next'
import Image from 'next/image'
import PageTitle from '../components/pageTitle'

export const metadata: Metadata = {
  title: 'About - sumirehibiya.com',
}

export default function About() {
  return (
    <div className="md:w-4/5 lg:w-3/5 md:m-auto">
      <PageTitle text="Sumire Hibiya" />
      <div className="grid md:grid-cols-5 gap-12">
        <div className="relative col-span-5 h-80 md:col-span-2">
          <Image
            src="/profile.jpg"
            alt="Sumire Hibiya"
            className="object-contain w-auto object-top"
            fill
            objectFit="contain"
          />
        </div>
        <div className="col-span-5 md:col-span-3">
          <h3>著者</h3>
          <p>日比谷すみれといいます。デジタル領域のProduct Designerです。</p>
          <h3>経歴</h3>
          <dl className="mb-6">
            <dt>2021/02~</dt>
            <dd>株式会社10X デザイナー</dd>
          </dl>
          <dl className="mb-6">
            <dt>2017/06~2021/01</dt>
            <dd>ファンズ株式会社 UIデザイナー/PM</dd>
          </dl>
          <dl className="mb-6">
            <dt>2015/01~2017/06</dt>
            <dd>株式会社グッドパッチ UIデザイナー/PM</dd>
          </dl>
          <dl className="mb-6">
            <dt>2013/9</dt>
            <dd>早稲田大学商学部卒業</dd>
          </dl>
          <h3>Disclaimer</h3>
          <p>
            このサイトでは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムを利用します。
          </p>
        </div>
      </div>
    </div>
  )
}
