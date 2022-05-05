import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Logo } from './Icon'
import { Button } from './Button'

export const Header = ({ item }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center text-white'>
      <div className="absolute top-0 left-0 w-screen -z-10 md:bg-brand-main">
        <Image
          src="/images/header_vector_bg.png"
          width={500}
          height={500}
        />
      </div>
      <div className='mt-8 mb-6'>
        <NextLink href="/">
          <a className='flex justify-center'>
            <Logo icon="logo" color="white" />
          </a>
        </NextLink>
      </div>
      <p>Lorem Ipsum is simply  dummy text of the printing  and typesetting</p>
      <div className='mt-6'>
        <Button label='Get Started' />
      </div>
    </div>
  )
}
