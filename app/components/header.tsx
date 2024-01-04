import Link from 'next/link'
import MenuLink from './headerMenuLink'

export default function Header() {
  return (
    <header className="fixed z-40 top-0 left-0 right-0 bg-opacity-50 backdrop-blur-xl border-b bg-gray-100 flex justify-center flex-col items-center md:flex-row md:justify-between p-6  md:p-10 font-display tracking-wide">
      <div className="flex items-center mb-4 md:mb-0">
        <h1 className="text-xl !leading-none">
          <Link href="/" className="hover:no-underline mr-4">
            Scratchpad
          </Link>
        </h1>
        <p>by @suuminbot</p>
      </div>

      <div className="!leading-none text-xs">
        <MenuLink />
      </div>
    </header>
  )
}
