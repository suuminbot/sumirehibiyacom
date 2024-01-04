import Link from 'next/link'
import Image from 'next/image'

type BookCardProps = {
  title: string
  imageUrl: string
  author: string
  status: string
  url: string
  readDate?: string
}

// 未読・読了・読書中のステータス別表示のためのコンポーネント
type StatusComponentProps = {
  color: string
  label: string
  readDate?: string
}

const StatusComponent: React.FC<StatusComponentProps> = ({
  color,
  label,
  readDate,
}) => (
  <div className="text-xs inline-flex items-center py-1 px-2 border rounded-lg">
    <p className={`h-3 w-3 mr-1 rounded-full ${color}`} />
    <p className="leading-none">{label}</p>
    {readDate && <p>({readDate})</p>}
  </div>
)

// BookCard本体
const BookCard: React.FC<BookCardProps> = ({
  title,
  imageUrl,
  author,
  status,
  url,
  readDate,
}) => (
  <Link
    href={url}
    className="block p-4 rounded-2xl transition-all group hover:no-underline"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className="h-64 mb-4 relative">
      <Image
        src={imageUrl}
        alt={title}
        className="object-contain w-auto group-hover:scale-105 group-hover:shadow-xl group-hover:duration-300"
        fill
      />
    </div>
    <div className="group">
      <p className="text-sm group-hover:text-violet-600 group-hover:duration-300">
        {title}
      </p>
      <p className="text-xs text-slate-700 mb-2">{author}</p>
      {status === 'read' || status === 'unread' || status === 'inProgress' ? (
        <StatusComponent
          color={
            status === 'read'
              ? 'bg-teal-500'
              : status === 'unread'
              ? 'bg-white'
              : 'bg-slate-400'
          }
          label={
            status === 'read' ? '読了' : status === 'unread' ? '未読' : '読書中'
          }
          readDate={readDate}
        />
      ) : (
        <p className="text-xs">{status}</p>
      )}
    </div>
  </Link>
)

export default BookCard
