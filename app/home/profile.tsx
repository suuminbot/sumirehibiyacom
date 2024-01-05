import Link from 'next/link'

export default function Profile() {
  return (
    <div className="mb-24">
      <p className="mb-8 text-2xl font-display !leading-tight">
        Product designer crafting solutions at the intersection of user
        problem-solving and business outcomes.
      </p>
      <p className="mb-4 text-base !leading-relaxed">
        I'm Sumire Hibiya, a Tokyo based product designer with ten years of
        experience. I'm currently working at{' '}
        <Link href="https://10x.co.jp/" target="_blank">
          10X
        </Link>
        which is developing a product “Stailer” to establish and operate an
        online grocery store for retail businesses.
      </p>
      <p className="text-base !leading-relaxed">
        I value deeply understanding user, prototyping, design systems and team
        communications.
      </p>
      <Link href="/about" />
    </div>
  )
}
