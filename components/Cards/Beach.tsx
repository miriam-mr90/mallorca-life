import React from "react";
import Image from 'next/image'
import NextLink from 'next/link'
import { Icon } from '@/components/Icon'

interface CardProps {
  title: string
  cover: string
  description: string
  locationLink: string | null | undefined
}

export const BeachCard = ({
  title,
  cover,
  description,
  locationLink
}:CardProps) => {
  return (
    <div className="flex flex-col drop-shadow-md rounded-2xl sm:h-full">
      <div className="relative w-full overflow-hidden shrink-0 h-52 rounded-2xl">
        <Image
          // src={`/${cover}`}
          src="/images/es-trenc.jpeg"
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 text-white bg-gradient-to-t from-black-gradient rounded-b-2xl">
        <p className="mb-1 font-semibold">{title}</p>
        {locationLink && <div className="flex">
          <NextLink href={locationLink}>
            <a className='flex justify-center text-sm' target="_blank">
              <Icon icon="pin" color="white" size="x-small" className="mt-0.5 mr-1"/>
              <span className="flex-1">Open in Google Maps</span>
            </a>
          </NextLink>
        </div>}
      </div>
    </div>
  )
}
