import Link from 'next/link'
// import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'sumirehibiya.com',
  openGraph: {
    images: ['/og.png'],
  },
}

export default function Home() {
  return (
    <div className="w-1/2 m-auto">
      <div className="mb-24">
        <p className="mb-2 text-2xl font-display !leading-tight">
          Product designer crafting solutions at the intersection of user
          problem-solving and business outcomes.
        </p>
        <p className="mb-2 !leading-relaxed">
          I'm Sumire Hibiya, a Tokyo based product designer with ten years of
          experience. I'm currently working at{' '}
          <Link href="https://10x.co.jp/" target="_blank">
            10X
          </Link>{' '}
          which is developing a product “Stailer” to establish and operate an
          online grocery store for retail businesses.
        </p>
        <p className="!leading-relaxed">
          I value deeply understanding user, prototyping, design systems and
          team communications.
        </p>
        <Link href="/about" />
      </div>
      <h2 className="font-display">Activities</h2>
      <div>
        {/* card */}
        <div className="flex">
          <div>
            {' '}
            <p>date</p>
            <p>content</p>
          </div>
        </div>
      </div>
    </div>
  )
}
