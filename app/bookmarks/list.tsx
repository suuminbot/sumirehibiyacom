'use client'
import React, { useState } from 'react'
import BookmarkCard from './components/bookmarkCard'
import BookmarksData from '../../content/bookmarks/bookmarks'
import Menu from './components/menu'

const BookmarksList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 flex md:col-span-1 md:block">
        {/* menu */}
        <Menu
          label="All"
          onClick={() => handleCategoryClick(null)}
          selected={selectedCategory === null}
        />
        <Menu
          label="Websites"
          onClick={() => handleCategoryClick('website')}
          selected={selectedCategory === 'website'}
        />
        <Menu
          label="Articles"
          onClick={() => handleCategoryClick('article')}
          selected={selectedCategory === 'article'}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {BookmarksData.filter((bookmark) =>
          selectedCategory ? bookmark.category === selectedCategory : true
        ).map((bookmark) => (
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
  )
}

export default BookmarksList
