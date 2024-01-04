export type Book = {
  title: string
  author: string
  imageUrl: string
  url: string
  status: 'unread' | 'inProgress' | 'read' // 未読または既読
}

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
  },
  {
    title: 'ヘルシンキ 生活の練習',
    author: '朴 沙羅',
    imageUrl: '/data/library/helsinki.jpg',
    url: 'https://amzn.to/3S9dTgQ',
    status: 'read',
  },

  {
    title: 'book2',
    author: 'Author 2',
    imageUrl: '/data/library/samish.jpg',
    url: 'https://amzn.to/3S5XfhS',
    status: 'unread',
  },
  // Add more books as needed
]

export default books
