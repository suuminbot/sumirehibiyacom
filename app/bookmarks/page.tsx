import type { Metadata } from 'next'
import PageTitle from '../components/pageTitle'
import BookmarkCard from './components/bookmarkCard'
import BookmarksData from '../../content/bookmarks/bookmarks'

export const metadata: Metadata = {
  title: 'Bookmark - sumirehibiya.com',
}

const Bookmarks: React.FC = () => (
  <div>
    <PageTitle text="Bookmarks" />

    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 text-base">
        <p>All</p>
        <p>Websites</p>
        <p>Articles</p>
      </div>
      <div className="col-span-3">
        {BookmarksData.map((bookmark) => (
          <BookmarkCard
            key={bookmark.title}
            title={bookmark.title}
            faviconUrl={bookmark.faviconUrl}
            url={bookmark.url}
            domain={bookmark.domain}
            bookmarkDate={bookmark.bookmarkDate}
            category={bookmark.category}
            comment={bookmark.comment}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Bookmarks
