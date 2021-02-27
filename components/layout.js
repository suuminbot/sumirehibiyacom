import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="bg-gray-800">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
