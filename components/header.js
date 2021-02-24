import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between">
      <h1>@suuminbot</h1>
      <div>
        <Link href="/notes">NOTES</Link>
      </div>
    </div>
  )
}
