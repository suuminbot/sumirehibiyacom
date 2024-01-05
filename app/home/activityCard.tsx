import Link from 'next/link'
// import Image from 'next/image'

type ActivityCardProps = {
  date: string
  title: string
  url: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({ date, title, url }) => (
  <Link
    href={url}
    className="p-2 md:p-4 mb-2 rounded-xl transition-all flex group hover:no-underline hover:bg-white"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className="w-6 h-6 bg-black mr-4" />
    <div>
      <p className="mb-2">{title}</p>
      <p className="text-xs text-slate-600">{date}</p>
    </div>
  </Link>
)

export default ActivityCard
