import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageTitle from '../components/pageTitle'
import getNotes from '../../content/notes/notes'

export const metadata: Metadata = {
  title: 'sumirehibiya.com',
  openGraph: {
    images: ['/og.png'],
  },
}

export default async function Home() {
  const notes = await getNotes()

  const posts = await Promise.all(
    notes.map(async (note) => {
      const date = new Date(note.date)
      const d = `${date.getFullYear()}年${('0' + (date.getMonth() + 1)).slice(
        -2
      )}月${('0' + date.getDate()).slice(-2)}日`
      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: note.fileName.replace('.md', ''),
        note: note,
        d: d,
      }
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) =>
      new Date(b.note.date) > new Date(a.note.date) ? 1 : -1
    )
  )

  return (
    <div>
      <PageTitle text="Notes" />
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.slug} className="flex mb-10 items-center">
            <Link
              href={`/notes/${post.slug}`}
              className="mr-6 w-20 h-20 md:w-32 md:h-32 flex-none relative flex justify-center items-center hover:no-underline"
            >
              <p className="z-10 p-4 bg-white rounded">{post.note.icon}</p>
              <Image
                src={`${post.note.coverImage}`}
                alt={`${post.note.title}`}
                fill
                className="object-cover"
              />
            </Link>
            <div>
              <Link
                href={`/notes/${post.slug}`}
                className="text-sm font-bold block mb-2"
              >
                {post.note.title}
              </Link>
              <p className="text-xs">{post.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
