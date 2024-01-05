// トップページに表示するアクティビティログのデータ

export type Activity = {
  date: string
  title: string
  url: string
  category: 'updateAbout' | 'updateNotes' | 'updateLibrary' | 'updateBookmarks'
}

const Activities: Activity[] = [
  {
    title: 'Bookmarksページを追加',
    date: '2024/01/05',
    url: '/bookmarks',
    category: 'updateBookmarks',
  },
  {
    title: 'Libraryページを追加',
    date: '2024/01/04',
    url: '/library',
    category: 'updateLibrary',
  },
]

export default Activities
