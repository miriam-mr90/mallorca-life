import React from "react";
import Image from 'next/image'
import { Icon } from '@/components/Icon'

interface CardProps {
  title: string
  cover: string
  description: string
  address: string
  locationLink: string
}

export const Card = ({
  title,
  cover,
  description,
  address,
  locationLink
}:CardProps) => {
  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-2xl">
      <div className="relative w-full overflow-hidden shrink-0 h-52 rounded-t-2xl">
        <Image
          // src={`/${cover}`}
          src="/images/es-trenc.jpeg"
          layout='fill'
          objectFit='fill'
        />
      </div>
      <div className="p-5">
        <p className="mb-2 font-semibold">{title}</p>
        {/* <p>{description}</p> */}
        {address && <div className="flex">
          <Icon icon="pin" color="brand" size="x-small" className="mt-0.5 mr-1"/>
          <span className="flex-1 text-sm text-grey">{address}</span>
          {/* <span>{locationLink}</span> */}
        </div>}
      </div>
    </div>
  )
}
