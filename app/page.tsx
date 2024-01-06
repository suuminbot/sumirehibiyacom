import type { Metadata } from 'next'
import ActivityCard from './home/activityCard'
import ActivitiesData from '../content/activities/activities'
import Profile from './home/profile'
import ActivitySummaryCard from './home/activitySummaryCard'
import getNotes from '../content/notes/notes'
import Books from '../content/library/books'
import BookmarksData from '../content/bookmarks/bookmarks'

export const metadata: Metadata = {
  title: 'sumirehibiya.com',
  openGraph: {
    images: ['/og.png'],
  },
}

export default async function Home() {
  // ActivitiesData を最新の5件だけ取得
  const latestActivities = ActivitiesData.slice(0, 5)

  const data = new Map<
    number,
    { notes: number; books: number; bookmarks: number }
  >()
  const notes = await getNotes()
  notes.forEach((note) => {
    const year = new Date(note.date).getFullYear()
    if (!data.get(year)) {
      data.set(year, { notes: 0, books: 0, bookmarks: 0 })
    }
    const counts = data.get(year)
    if (counts) {
      counts['notes']++
    }
  })
  Books.forEach((book) => {
    if ('readDate' in book) {
      const year = new Date(book.readDate).getFullYear()
      if (!data.get(year)) {
        data.set(year, { notes: 0, books: 0, bookmarks: 0 })
      }
      const d = data.get(year)
      if (d) {
        d['books']++
      }
    }
  })
  BookmarksData.forEach((bookmark) => {
    const year = new Date(bookmark.bookmarkDate).getFullYear()
    if (!data.get(year)) {
      data.set(year, { notes: 0, books: 0, bookmarks: 0 })
    }
    const counts = data.get(year)
    if (counts) {
      counts['bookmarks']++
    }
  })

  // TODO: activity summary の仕様が不明だったのでとりあえず全部に同じのおいてる

  return (
    <div className="m-auto w-auto md:w-4/5 lg:w-3/5">
      <div className="mb-16">
        <Profile />
      </div>
      {Array.from(data).map(([year, counts]) => (
        <div className="ml-4 border-l border-stone-200 pl-6 pb-10 relative">
          <h2
            className="
             before:block before:h-8 before:w-8 before:bg-stone-100 before:absolute before:-left-[17px]
             after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-stone-300 after:absolute after:-left-[6px]
              font-display m-0 px-2
             flex items-center
                  "
          >
            {year}
          </h2>
          <div className="px-2 my-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ">
            <ActivitySummaryCard category="Notes" number={counts['notes']} />
            <ActivitySummaryCard category="Library" number={counts['books']} />
            <ActivitySummaryCard
              category="Bookmarks"
              number={counts['bookmarks']}
            />
          </div>
          {latestActivities.map((activity) => (
            <ActivityCard
              key={activity.title}
              category={activity.category}
              title={activity.title}
              date={activity.date}
              url={activity.url}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
