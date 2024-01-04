'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = () => {
  const currentPath = usePathname()
  return (
    <div>
      <Link
        href={'/'}
        className={
          currentPath === '/'
            ? 'text-green-500 font-semibold'
            : 'text-slate-600'
        }
      >
        HOME
      </Link>
      <Link
        href={'/library'}
        className={
          currentPath === '/library'
            ? 'text-green-500 font-semibold'
            : 'text-slate-600'
        }
      >
        LIBRARY
      </Link>
      <Link
        href={'/about'}
        className={
          currentPath === '/about'
            ? 'text-green-500 font-semibold'
            : 'text-slate-600'
        }
      >
        ABOUT
      </Link>
    </div>
  )
}

export default MenuLink
