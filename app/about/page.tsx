import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - sumirehibiya.com",
};

export default function About() {
  return (
    <div className="leading-7">
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
  );
}
