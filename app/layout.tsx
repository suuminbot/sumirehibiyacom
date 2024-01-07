import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
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
    <html lang="ja" className={`${poppins.variable} ${inter.variable}`}>
      <body className="h-full bg-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
