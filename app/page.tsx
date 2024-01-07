import type { Metadata } from 'next'
import ActivityCard from './home/activityCard'
import ActivitiesData from '../content/activities/activities'
import Profile from './home/profile'
import ActivitySummaryCard from './home/activitySummaryCard'

export const metadata: Metadata = {
  title: 'sumirehibiya.com',
  openGraph: {
    images: ['/og.png'],
  },
}

const Home: React.FC = () => {
  // ActivitiesData を最新の5件だけ取得
  const latestActivities = ActivitiesData.slice(0, 5)

  return (
    <div className="m-auto w-auto md:w-4/5 lg:w-3/5">
      <div className="mb-16">
        <Profile />
      </div>
      <div className="ml-4 border-l border-stone-200 pl-6 pb-10 relative">
        <h2
          className="
            before:block before:h-8 before:w-8 before:bg-stone-100 before:absolute before:-left-[17px]
            after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-stone-300 after:absolute after:-left-[6px]
            font-display m-0 px-2
            flex items-center
           "
        >
          2024
        </h2>
        <div className="px-2 my-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ">
          <ActivitySummaryCard category="Notes" number="0" />
          <ActivitySummaryCard category="Library" number="1" />
          <ActivitySummaryCard category="Bookmarks" number="4" />
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
      <div className="ml-4 border-l border-stone-200 pl-6 pb-10 relative">
        <h2
          className="
            before:block before:h-8 before:w-8 before:bg-stone-100 before:absolute before:-left-[17px]
            after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-stone-300 after:absolute after:-left-[6px]
            font-display m-0 px-2
            flex items-center
           "
        >
          2023
        </h2>
        <div className="px-2 my-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ">
          <ActivitySummaryCard category="Notes" number="3" />
          <ActivitySummaryCard category="Library" number="28" />
          <ActivitySummaryCard category="Bookmarks" number="0" />
        </div>
      </div>
    </div>
  )
}

export default Home
