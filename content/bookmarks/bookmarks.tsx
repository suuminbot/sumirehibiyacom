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
    title: 'Website',
    faviconUrl:
      'https://www.youtube.com/s/desktop/f4449159/img/favicon_32x32.png',
    url: 'https://www.youtube.com/',
    domain: 'www.youtube.com',
    bookmarkDate: '2024/01/04',
    category: 'website',
    comment: 'hoge',
  },
  {
    title: 'Article',
    faviconUrl:
      'https://www.youtube.com/s/desktop/f4449159/img/favicon_32x32.png',
    url: 'https://www.youtube.com/',
    domain: 'www.youtube.com',
    bookmarkDate: '2024/01/04',
    category: 'article',
    comment: 'hoge',
  },
  {
    title: 'YouTube',
    faviconUrl:
      'https://www.youtube.com/s/desktop/f4449159/img/favicon_32x32.png',
    url: 'https://www.youtube.com/',
    domain: 'www.youtube.com',
    bookmarkDate: '2024/01/04',
    category: 'website',
    comment: 'hoge',
  },
]

export default Bookmarks
