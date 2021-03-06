import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import PostIcon from '../components/post-icon'

export default function PostHeader({ title, coverImage, date, icon }) {
  return (
    <>
      <div className="w-full m-auto mb-10">
        <PostIcon>{icon}</PostIcon>
        <PostTitle>{title}</PostTitle>
        <div className="text-center text-paleyYellow-dark">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-10 -mx-4 lg:-mx-24 relative h-60 md:h-72 lg:h-96">
        <CoverImage title={title} src={coverImage} width={1000} height={562} />
      </div>
    </>
  )
}
