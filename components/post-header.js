import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-10 text-center text-paleyYellow-dark">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-10">
        <CoverImage title={title} src={coverImage} width={1000} height={562} />
      </div>
    </>
  )
}
