import React from 'react'

type MenuProps = {
  label: string
  selected: boolean
  onClick: () => void
}

const Menu: React.FC<MenuProps> = ({ label, selected, onClick }) => {
  const nonSelectedClassName = 'hover:bg-white'
  const selectedClassName = 'bg-white'
  return (
    <p
      onClick={onClick}
      className={`my-1 py-2 px-4 cursor-pointer rounded-lg transition-all duration-300 ${
        selected ? selectedClassName : nonSelectedClassName
      }`}
    >
      {label}
    </p>
  )
}

export default Menu
