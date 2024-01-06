export type Bookmark = {
  title: string
  faviconUrl: string
  url: string
  domain: string
  bookmarkDate: string
  category: 'website' | 'article'
  comment: string
}

const Bookmarks: Bookmark[] = [
  {
    title: 'System of Record と System of Engagement - Speaker Deck',
    url: 'https://speakerdeck.com/naoya/system-of-record-to-system-of-engagement',
    domain: 'speakerdeck.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://speakerdeck.com/naoya/system-of-record-to-system-of-engagement',
    bookmarkDate: '2024/01/05',
    category: 'article',
    comment: '',
  },
  {
    title: '些末なコードレビュー - naoyaのはてなダイアリー',
    url: 'https://naoya-2.hatenadiary.org/entry/20140313/1394664578',
    domain: 'naoya-2.hatenadiary.org',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://naoya-2.hatenadiary.org/entry/20140313/1394664578',
    bookmarkDate: '2024/01/05',
    category: 'article',
    comment: '',
  },
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
