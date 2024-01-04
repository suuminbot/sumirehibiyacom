import React from 'react'
import Link from 'next/link'

const MenuLink = ({ href, label, currentPath }) => (
  <Link
    href={href}
    className={`text-xs p-2 mx-0.5 !leading-none hover:no-underline ${
      currentPath === href ? 'bg-white rounded-lg ' : ''
    }`}
  >
    {label}
  </Link>
)

export default MenuLink
