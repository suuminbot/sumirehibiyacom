import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({ title, coverImage, date, slug, icon }) {
  return (
    <div className="flex mb-10">
      <div className="mr-4 w-20 h-20 md:w-32 md:h-32 flex-none relative flex justify-center items-center">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          width={556}
          height={278}
        />
        <Link as={`/notes/${slug}`} href="/notes/[slug]">
          <a
            aria-label={title}
            className="absolute m-auto bg-white rounded-lg w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-2xl md:text-5xl z-20 hover:shadow-lg shadow-none transition"
          >
            {icon}
          </a>
        </Link>
      </div>
      <div>
        <p className="text-xl font-bold mb-2 leading-snug">
          <Link as={`/notes/${slug}`} href="/notes/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </p>
        <div className="text-sm text-paleyYellow-dark">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  )
}
