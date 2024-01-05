import type { Metadata } from 'next'
import PageTitle from '../components/pageTitle'
import BookmarkList from './list'

export const metadata: Metadata = {
  title: 'Bookmarks - sumirehibiya.com',
}

export default function Bookmarks() {
  return (
    <div>
      <PageTitle text="Bookmarks" />
      <BookmarkList />
    </div>
  )
}
