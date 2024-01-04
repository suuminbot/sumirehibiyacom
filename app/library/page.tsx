import type { Metadata } from 'next'
import PageTitle from '../components/pageTitle'
import BookCard from './components/bookCard'
import Books from '../../data/library/books'

export const metadata: Metadata = {
  title: 'Library - sumirehibiya.com',
}

const Library: React.FC = () => (
  <div>
    <PageTitle text="LIBRARY" />

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {Books.map((book) => (
        <BookCard
          key={book.title}
          title={book.title}
          imageUrl={book.imageUrl}
          author={book.author}
          status={book.status}
          url={book.url}
          readDate={book.readDate}
        />
      ))}
    </div>
  </div>
)

export default Library
