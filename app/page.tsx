import type { Metadata } from 'next'
import ActivityCard from './home/activityCard'
import ActivitiesData from '../content/activities/activities'
import Profile from './home/profile'

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
      <div className="border-l-2 pl-6 relative">
        <h2
          className="
            before:block before:h-8 before:w-8 before:bg-white before:absolute before:-left-5
            font-display
            flex items-center
           "
        >
          <p className="w-2 h-2 rounded-full bg-stone-400 -ml-8"></p>
          <p>2024</p>
        </h2>
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
    </div>
  )
}

export default Home
