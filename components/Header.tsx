import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Logo } from './Icon'
import { Button } from './Button'

interface HeaderProps {
  text: string
  cta: string
}

export const Header: React.FC<HeaderProps> = ({ text, cta }) => {
  return (
    <div className='flex flex-col items-center justify-center px-6 text-center text-white mb-14 h-324'>
      <div className="absolute top-0 left-0 w-screen -z-10 md:bg-brand-main">
        <Image
          src="/images/header_vector_bg.png"
          width={500}
          height={612}
        />
      </div>
      <div className='mt-8 mb-6'>
        <NextLink href="/">
          <a className='flex justify-center'>
            <Logo icon="logo" color="white" />
          </a>
        </NextLink>
      </div>
      <p>{text}</p>
      <div className='mt-6'>
        <Button label={cta} />
      </div>
    </div>
  )
}
