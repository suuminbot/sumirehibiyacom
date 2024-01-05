import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faUser,
  faNoteSticky,
  faBook,
  faBookmark,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

type ActivityCardProps = {
  date: string
  title: string
  url: string
  category: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  category,
  date,
  title,
  url,
}) => {
  let categoryIcon
  let categoryIconColor
  let categoryColor

  // カテゴリーごとに異なるアイコン・スタイルを設定
  switch (category) {
    case 'updateAbout':
      categoryIcon = faUser
      categoryIconColor = 'text-orange-600'
      categoryColor = 'bg-orange-100'
      break
    case 'updateNotes':
      categoryIcon = faNoteSticky
      categoryIconColor = 'text-emerald-600'
      categoryColor = 'bg-emerald-100'
      break
    case 'updateLibrary':
      categoryIcon = faBook
      categoryIconColor = 'text-violet-600'
      categoryColor = 'bg-violet-100'
      break
    case 'updateBookmarks':
      categoryIcon = faBookmark
      categoryIconColor = 'text-sky-600'
      categoryColor = 'bg-sky-100'
      break
    default:
      categoryIcon = faHeart // デフォルトのアイコン
      categoryIconColor = 'text-stone-600'
      categoryColor = 'bg-stone-100' // デフォルトの背景色
  }

  return (
    <div className="flex items-center relative">
      <div className="w-6 h-6 bg-white border rounded-full mr-4 flex items-center justify-center relative z-10">
        <div className="w-2 h-2 bg-slate-400 rounded-full" />
      </div>
      <Link
        href={url}
        className={`
          p-2 mb-1 rounded-xl
          // flex関連
          flex items-center justify-between grow
          // animation関連
          group hover:no-underline hover:bg-white transition-all duration-300`}
      >
        <div className="flex items-center">
          <div
            className={`w-16 h-16 rounded-lg ${categoryColor} mr-4 flex-none flex items-center justify-center`}
          >
            <FontAwesomeIcon
              icon={categoryIcon}
              className={`h-4 ${categoryIconColor}`}
            />
          </div>
          <div>
            <p className="mb-1">{title}</p>
            <p className="text-xs text-slate-600">{date}</p>
          </div>
        </div>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:duration-300">
          <FontAwesomeIcon icon={faArrowRight} className="h-4 text-slate-400" />
        </div>
      </Link>
      <div className="absolute h-full w-[1px] bg-slate-300 bg-opacity-50 left-3" />
    </div>
  )
}

export default ActivityCard
