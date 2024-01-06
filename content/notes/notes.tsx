import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Note = {
  fileName: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  icon: string
  content: string
}

export async function getNote(fileName: string): Promise<Note> {
  const postsDirectory = path.join(process.cwd(), 'content/notes')
  const filePath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    fileName: fileName,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    date: data.date,
    icon: data.icon,
    content: content,
  }
}

export default async function getNotes(): Promise<Note[]> {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'content/notes')
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => path.extname(f) === '.md')

  // 各ファイルの中身を取得
  return await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        fileName: fileName,
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        date: data.date,
        icon: data.icon,
        content: content,
      }
    })
  )
}
