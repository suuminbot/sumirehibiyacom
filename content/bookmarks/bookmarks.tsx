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
    title: 'Krijn Rijshouwer - Product Designer & Advisor',
    url: 'https://www.krijnrijshouwer.com/',
    domain: 'www.krijnrijshouwer.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://www.krijnrijshouwer.com/',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: '',
  },
  {
    title: 'Ryan Mack',
    url: 'https://ryanmack.me/',
    domain: 'ryanmack.me',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://ryanmack.me/',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: '3columns',
  },
  {
    title: 'Simone Magurno › Brand, Product & Systems Design',
    url: 'https://magur.no/',
    domain: 'magur.no',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=https://magur.no/',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: '活動のタイムライン表示',
  },
  {
    title: 'Marc Bouchenoire',
    url: 'https://marcbouchenoire.com/',
    domain: 'marcbouchenoire.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://marcbouchenoire.com/',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: 'Activity表示がかわいい',
  },
  {
    title: 'Modified Title',
    url: 'https://daleanthony.com/',
    domain: 'daleanthony.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://daleanthony.com/',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: 'Dale-Anthonyさんの個人サイト',
  },
  {
    title: 'OpenPurpose® — Design Partner for Founders',
    url: 'https://openpurpose.com/?ref=land-book.com',
    domain: 'openpurpose.com',
    faviconUrl:
      'https://www.google.com/s2/favicons?domain=https://openpurpose.com/?ref=land-book.com',
    bookmarkDate: '2024/01/06',
    category: 'website',
    comment: '',
  },
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
