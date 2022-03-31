import React from 'react'
import Image from 'next/image'
import { Logo } from '@/components/Logo'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`
}

export const Header = ({ item }) => {
  return (
    <div className='flex flex-col justify-center text-center text-white'>
      <div className="absolute top-0 left-0 w-screen -z-10">
        <Image
          src="/images/header_vector_bg.png"
          width={500}
          height={500}
        />
      </div>
      <div className='mt-8 mb-6'>
        <Logo theme="white" size="medium"/>
      </div>
      <p>Lorem Ipsum is simply  dummy text of the printing  and typesetting</p>
      <button className='p-3 mt-6 font-semibold bg-white text-brand-main rounded-xl'>Get Started</button>
    </div>

  )
}
