import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between items-center py-20 font-display">
      <h1 className="text-3xl">Sumire Hibiya @suuminbot</h1>
      <div className="text-sm leading-none">
        <Link href="/notes" className="leading-none">
          NOTES
        </Link>
      </div>
    </div>
  )
}
