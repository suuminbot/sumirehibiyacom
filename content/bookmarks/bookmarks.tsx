export type Bookmark = {
  title: string
  faviconUrl: string
  url: string
  domain: string
  bookmarkDate: string
  category: 'website' | 'article'
  comment?: string
}

const Bookmarks: Bookmark[] = [
  {
    title: 'Brian Lovin',
    faviconUrl: 'https://brianlovin.com/static/favicon.ico',
    url: 'https://brianlovin.com/',
    domain: 'brianlovin.comm',
    bookmarkDate: '2024/01/05',
    category: 'website',
    comment: '',
  },
  {
    title: 'Maggie Appleton',
    faviconUrl: 'https://maggieappleton.com/images/favicon/favicon.ico',
    url: 'https://maggieappleton.com/',
    domain: 'maggieappleton.com',
    bookmarkDate: '2024/01/05',
    category: 'website',
    comment: '',
  },
]

export default Bookmarks
