import Link from 'next/link'

type BookmarkCardProps = {
  title: string
  faviconUrl: string
  url: string
  domain: string
  bookmarkDate: string
  category: string
  comment?: string
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({
  title,
  faviconUrl,
  url,
  domain,
  bookmarkDate,
  category,
  comment,
}) => (
  <Link
    href={url}
    className="block p-2 md:p-4 mb-2 rounded-xl transition-all group hover:no-underline hover:bg-white"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className="flex items-center">
      <img
        src={faviconUrl}
        width="18"
        height="18"
        alt={title}
        className="mr-2 h-4"
      />
      <p className="text-base group-hover:duration-300">{title}</p>
    </div>
    <p className="text-xs text-slate-600 mb-2">
      {domain} #{category}
    </p>
    <div className="p-2 flex items-center rounded-md bg-neutral-200 bg-opacity-70">
      <p className="text-xs mr-2 text-slate-600">{bookmarkDate}</p>
      <p>{comment}</p>
    </div>
  </Link>
)

export default BookmarkCard
