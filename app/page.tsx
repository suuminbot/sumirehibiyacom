import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'sumirehibiya.com',
  openGraph: {
    images: ['/og.png'],
  },
}

export default async function Home() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'content')
  const fileNames = fs.readdirSync(postsDirectory)

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      const date = new Date(data.date) // 記事の日付
      const d = `${date.getFullYear()}年${('0' + (date.getMonth() + 1)).slice(
        -2
      )}月${('0' + date.getDate()).slice(-2)}日`

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
        d: d,
      }
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) =>
      new Date(b.frontmatter.date) > new Date(a.frontmatter.date) ? 1 : -1
    )
  )

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.slug} className="flex mb-10 items-center">
          <Link
            href={`/notes/${post.slug}`}
            className="mr-6 w-20 h-20 md:w-32 md:h-32 flex-none relative flex justify-center items-center hover:no-underline"
          >
            <p className="z-10 p-4 bg-white rounded">{post.frontmatter.icon}</p>
            <Image
              src={`${post.frontmatter.coverImage}`}
              alt={`${post.frontmatter.title}`}
              fill
              className="object-cover"
            />
          </Link>
          <div>
            <Link
              href={`/notes/${post.slug}`}
              className="text-sm font-bold block mb-2"
            >
              {post.frontmatter.title}
            </Link>
            <p className="text-xs">{post.d}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
