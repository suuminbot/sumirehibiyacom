import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faNoteSticky,
  faBook,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'

type ActivitySummaryCardProps = {
  category: string
  number: string
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({
  category,
  number,
}) => {
  let categoryIcon
  let categoryIconColor
  let categoryColor
  let description

  // カテゴリーごとに異なるアイコン・スタイルを設定
  switch (category) {
    case 'Notes':
      categoryIcon = faNoteSticky
      categoryIconColor = 'text-emerald-600'
      categoryColor = 'bg-emerald-100'
      description = '書いた記事'
      break
    case 'Library':
      categoryIcon = faBook
      categoryIconColor = 'text-violet-600'
      categoryColor = 'bg-violet-100'
      description = '読んだ本'
      break
    case 'Bookmarks':
      categoryIcon = faBookmark
      categoryIconColor = 'text-sky-600'
      categoryColor = 'bg-sky-100'
      description = '追加したブックマーク'
      break
    default:
      categoryIcon = faHeart // デフォルトのアイコン
      categoryIconColor = 'text-stone-600'
      categoryColor = 'bg-stone-100' // デフォルトの背景色
  }

  return (
    <div className="bg-white py-4 px-6 rounded-lg">
      <div className="flex items-center mb-2">
        <FontAwesomeIcon
          icon={categoryIcon}
          className={`h-4 mr-2 ${categoryIconColor}`}
        />
        <p className={`text-xs font-bold font-display ${categoryIconColor}`}>
          {category}
        </p>
      </div>
      <p className="text-xs mb-6">{description}</p>
      <p className="text-xl font-bold font-display">{number}</p>
    </div>
  )
}

export default ActivitySummaryCard
