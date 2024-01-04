import Link from 'next/link'
// import Image from 'next/image'

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
      <p className="text-base group-hover:text-violet-600 group-hover:duration-300">
        {title}
      </p>
    </div>
    <p className="text-xs text-slate-600 mb-2">
      {domain} #{category}
    </p>
    <div className="p-2 rounded-md bg-neutral-200">
      {bookmarkDate}
      {comment}
    </div>
  </Link>
)

export default BookmarkCard
