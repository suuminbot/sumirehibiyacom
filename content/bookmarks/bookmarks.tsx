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
    title: 'Dale-Anthony - Product Designer',
    url: 'https://daleanthony.com/',
    domain: 'daleanthony.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://daleanthony.com/',
    bookmarkDate: '2024/01/05',
    category: 'website',
    comment: '',
  },
  {
    title: 'Brian Lovin',
    url: 'https://brianlovin.com/',
    domain: 'brianlovin.comm',
    faviconUrl: 'https://brianlovin.com/static/favicon.ico',
    bookmarkDate: '2024/01/05',
    category: 'website',
    comment: '',
  },
  {
    title: 'Maggie Appleton',
    url: 'https://maggieappleton.com/',
    domain: 'maggieappleton.com',
    faviconUrl: 'https://maggieappleton.com/images/favicon/favicon.ico',
    bookmarkDate: '2024/01/05',
    category: 'website',
    comment: '',
  },
]

export default Bookmarks
