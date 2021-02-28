import Container from './container'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
      <div className="flex justify-between items-center py-20 font-display tracking-wide">
        <h1 className="text-3xl">
          <Link href="/">
            <a className="hover:no-underline">Sumire Hibiya</a>
          </Link>
        </h1>
        <div className="text-sm leading-none">
          <Link href="/notes">
            <a className="leading-none">NOTES</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}
