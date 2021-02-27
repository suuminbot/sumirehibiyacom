import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({ title, coverImage, date, slug }) {
  return (
    <div class="w-4/12 px-2 mb-10">
      <div className="mb-4">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <p className="text-xl font-bold mb-2 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </p>
      <div className="text-sm text-paleyYellow-dark">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
