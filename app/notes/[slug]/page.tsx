import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Image from 'next/image'
import Metadata from 'next'
import './markdown.css'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title + ' sumirehibiya.com',
    openGraph: {
      images: [data.coverImage],
    },
  }
}

// ブログ記事ページ
export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const title = data.title // 記事のタイトル
  const icon = data.icon // 記事のアイコン
  const date = new Date(data.date) // 記事の日付
  const d = `${date.getFullYear()}年${('0' + (date.getMonth() + 1)).slice(
    -2
  )}月${('0' + date.getDate()).slice(-2)}日`
  const coverImage = data.coverImage // サムネ
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)
  const contentHtml = processedContent.toString() // 記事の本文をHTMLに変換

  return (
    <>
      <div className="mb-10">
        <p className="mb-6 text-7xl text-center">{icon}</p>
        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-center">
          {title}
        </h1>
        <p className="text-center text-paleYellow-dark">{d}</p>
      </div>
      <div className="mb-10 -mx-4 lg:-mx-24 relative h-60 md:h-72 lg:h-96">
        <Image
          src={`${coverImage}`}
          alt={`${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </>
  )
}
