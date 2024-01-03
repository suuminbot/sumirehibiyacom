import './globals.css'
import { Josefin_Sans, Inter } from 'next/font/google'
import Link from 'next/link'

const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-josefinsans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${josefin_Sans.variable} ${inter.variable}`}>
      <body className="h-full bg-gray-100">
        <div className="container px-4 m-auto">
          <header className="flex justify-between items-center py-12 md:py-20 font-display tracking-wide">
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
          {children}
          <footer className="mt-32 py-16 text-center border-t-2">
            <p>©2021 Sumire Hibiya</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
