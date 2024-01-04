import './globals.css'
import { Josefin_Sans, Inter } from 'next/font/google'
// import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
