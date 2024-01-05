import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className="flex items-start">
      <Image
        src="/profile@2x.png"
        alt="Sumire Hibiya"
        width="96"
        height="96"
        className="mr-4 border-4 border-white rounded-full"
      />
      <div>
        <div className="mb-4">
          <h1 className="mb-1 font-display text-lg !leading-none font-bold">
            Sumire Hibiya
          </h1>
          <p className="text-sm text-stone-500">@suuminbot</p>
        </div>
        <div>
          <p className="mb-2">
            Product designer crafting solutions at the intersection of user
            problem-solving and business outcomes. <br />
            I'm currently working at
            <Link href="https://10x.co.jp/" target="_blank">
              10X
            </Link>
            which is developing a product “Stailer” to establish and operate an
            online grocery store for retail businesses.
          </p>
          <Link href="/about">Read full profile</Link>
        </div>
      </div>
    </div>
  )
}
