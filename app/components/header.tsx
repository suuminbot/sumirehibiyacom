import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 md:p-10 font-display tracking-wide">
      <div className="md:flex items-center">
        <h1 className="text-2xl md:text-3xl">
          <Link href="/" className="hover:no-underline mr-4">
            Scratchpad
          </Link>
        </h1>
        <p>by @suuminbot</p>
      </div>

      <div className="text-sm leading-none">
        <Link href="/" className="mr-3 hidden md:inline">
          HOME
        </Link>
        <Link href="/library" className="mr-3">
          LIBRARY
        </Link>
        <Link href="/about" className="mr-3">
          ABOUT
        </Link>
        <a
          href="https://moments-of-joy.hatenablog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hatena BLOG
        </a>
      </div>
    </header>
  )
}
