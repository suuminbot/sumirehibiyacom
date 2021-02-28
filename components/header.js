import Container from './container'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
      <div className="flex justify-between items-center py-20 font-display tracking-wide">
        <h1 className="text-3xl">
          <Link href="/">Sumire Hibiya</Link>
        </h1>
        <div className="text-sm leading-none">
          <Link href="/notes" className="leading-none">
            NOTES
          </Link>
        </div>
      </div>
    </Container>
  )
}
