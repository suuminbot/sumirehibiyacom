import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="py-3 md:p-6 relative">
        <div className="h-3 md:h-6 bg-white w-full fixed top-0 z-30" />
        <div className="h-3 md:h-6 bg-white w-full fixed bottom-0 z-30" />
        <div className="bg-gray-100 dark:bg-gray-800">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
