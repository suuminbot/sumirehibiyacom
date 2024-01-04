import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageTitle from '../components/pageTitle'

export const metadata: Metadata = {
  title: 'Library - sumirehibiya.com',
}

export default function Library() {
  return (
    <div>
      <PageTitle text="LIBRARY" />

      <div>
        <Link
          href="hoeg"
          className="w-1/5 border-2 md:w-32 md:h-32 hover:no-underline"
        >
          <Image
            src="/og.png"
            alt=""
            width="300"
            height="100"
            // className="w-full object-cover"
          />
          <div>
            <p className="text-xl font-bold block mb-2">bookname</p>
            <p className="text-sm">hoge</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
