type BookBase = {
  title: string
  author: string
  imageUrl: string
  url: string
}

type UnReadBook = BookBase & {
  status: 'unread'
}

type InProgressBook = BookBase & {
  status: 'inProgress'
}

type ReadBook = BookBase & {
  status: 'read'
  readDate: string // ex. 2023-02-01
}

export type Book = UnReadBook | InProgressBook | ReadBook

const books: Book[] = [
  {
    title: '迷うことについて',
    author: 'レベッカ ソルニット',
    imageUrl: '/data/library/mayoukoto.jpg',
    url: 'https://amzn.to/3ROBNN0',
    status: 'unread',
  },
  {
    title: 'ペルソナ戦略―マーケティング、製品開発、デザインを顧客志向にする',
    author: 'ジョン・S・プルーイット',
    imageUrl: '/data/library/perusona.jpg',
    url: 'https://amzn.to/3txH5of',
    status: 'unread',
  },
  {
    title:
      '優れたデザインにとってコンセプトが重要な理由: 使いやすく安心なソフトウェアを作るために',
    author: 'Daniel Jackson',
    imageUrl: '/data/library/theEssenceOfSoftware.jpg',
    url: 'https://amzn.to/48EgaGa',
    status: 'inProgress',
  },
  {
    title: 'さみしい夜にはペンを持て',
    author: '古賀 史健',
    imageUrl: '/data/library/samish.jpg',
    url: 'https://amzn.to/3S5XfhS',
    status: 'read',
    readDate: '2023-11-01',
  },
  {
    title: 'ヘルシンキ 生活の練習',
    author: '朴 沙羅',
    imageUrl: '/data/library/helsinki.jpg',
    url: 'https://amzn.to/3S9dTgQ',
    status: 'read',
    readDate: '2023-11-02',
  },
  {
    title:
      'わたしたちのウェルビーイングをつくりあうために その思想、実践、技術',
    author: '渡邊淳司, ドミニク・チェン',
    imageUrl: '/data/library/wellbeing.jpg',
    url: 'https://amzn.to/3tGPFks',
    status: 'read',
    readDate: '2023-11-03',
  },
  {
    title: 'なぜ男女の賃金に格差があるのか：女性の生き方の経済学',
    author: 'クラウディア・ゴールディン',
    imageUrl: '/data/library/kakusa.jpg',
    url: 'https://amzn.to/48bQf8R',
    status: 'read',
    readDate: '2023-10-01',
  },
]

export default books
