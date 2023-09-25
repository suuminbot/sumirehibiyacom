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
      <body className="h-full">
        <div className="py-3 md:p-6 relative">
          <div className="h-3 md:h-6 bg-white w-full fixed top-0 z-30" />
          <div className="h-3 md:h-6 bg-white w-full fixed bottom-0 z-30" />
          <div className="bg-gray-100">
            <div className="container px-4 md:max-w-screen-sm m-auto">
              <header className="flex justify-between items-center py-12 md:py-20 font-display tracking-wide">
                <div className="flex items-center">
                  <h1 className="text-2xl md:text-3xl">
                    <Link href="/" className="hover:no-underline mr-4">
                      Scratchpad
                    </Link>
                  </h1>
                  <p>by @suuminbot</p>
                </div>

                <div className="text-sm leading-none">
                  <Link href="/" className="mr-3">
                    HOME
                  </Link>
                  <Link href="/about" className="mr-3">
                    ABOUT
                  </Link>
                  <a
                    href="https://moments-of-joy.hatenablog.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
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
          </div>
        </div>
      </body>
    </html>
  )
}
