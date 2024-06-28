"use client"

import Link from 'next/link'
import React from 'react'

type buttonTypes = {
  link: string,
  text: string,
  Svg: React.ReactNode,
}

const RedirectButton = ({ link, text, Svg }: buttonTypes) => {
  return (
    <Link href={link} className='flex gap-3 border-2 border-black bg-orange-400 text-black p-2 rounded-lg max-w-44 items-center '>
      {Svg}
      <p className='text-[15px] font-semibold   '>{text}</p>
    </Link>
  )
}

export default RedirectButton