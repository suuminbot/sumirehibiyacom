'use client'

import Link from 'next/link'
import MenuLink from './headerMenuLink'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const currentPath = usePathname()

  return (
    <header
      className="
        // 固定
        fixed
        z-40
        top-0
        left-0
        right-0

        // 背景のスタイル
        bg-opacity-50
        backdrop-blur-xl
        border-b
        bg-gray-100
        font-display
        tracking-wide

        // モバイルでのスタイル
        flex
        justify-center
        flex-col
        items-center
        p-5

        // tablet以上でのスタイル
        md:flex-row
        md:justify-between
        md:p-10"
    >
      <div className="flex items-center mb-3 md:mb-0">
        <h1 className="text-lg !leading-none">
          <Link href="/" className="hover:no-underline mr-4">
            Sumire Hibiya
          </Link>
        </h1>
      </div>
      <div>
        <MenuLink href="/" label="HOME" currentPath={currentPath} />
        <MenuLink href="/notes" label="NOTES" currentPath={currentPath} />
        <MenuLink href="/library" label="LIBRARY" currentPath={currentPath} />
        <MenuLink
          href="/bookmarks"
          label="BOOKMARKS"
          currentPath={currentPath}
        />
        <MenuLink href="/about" label="ABOUT" currentPath={currentPath} />
      </div>
    </header>
  )
}

export default Header
