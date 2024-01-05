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

const Home: React.FC = () => (
  <div className="w-1/2 m-auto">
    <Profile />
    <h2 className="font-display">Activities</h2>
    {ActivitiesData.map((activity) => (
      <ActivityCard
        key={activity.title}
        category={activity.category}
        title={activity.title}
        date={activity.date}
        url={activity.url}
      />
    ))}
  </div>
)

export default Home
