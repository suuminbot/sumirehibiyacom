import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-full p-6">
        <div className="bg-gray-800 h-full overflow-scroll">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
