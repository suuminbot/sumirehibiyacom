import React from 'react'
import Link from 'next/link'

type MenuLinkProps = {
  href: string
  label: string
  currentPath: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, label, currentPath }) => (
  <Link
    href={href}
    className={`text-xs px-1 py-2 md:p-2 mx-0.5 rounded-lg transition-all duration-300 !leading-none hover:no-underline hover:bg-white ${
      currentPath === href ? 'bg-white' : ''
    }`}
  >
    {label}
  </Link>
)

export default MenuLink
