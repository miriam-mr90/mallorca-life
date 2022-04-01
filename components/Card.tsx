import React from "react";
import Image from 'next/image'
import { Icon } from '@/components/Icon'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`
}

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
    <div className="p-5 pt-8 bg-white drop-shadow-md rounded-2xl">
      {/* <p>{cover}</p> */}
      <Image
          src={`/${cover}`}
          width={500}
          height={500}
        />
      <p className="mb-2 font-semibold">{title}</p>
      {/* <p>{description}</p> */}
      <div className="flex">
        <Icon icon="pin" color="brand" size="x-small" className="mt-0.5 mr-1"/>
        <span className="flex-1 text-sm text-grey">{address}</span>
        {/* <span>{locationLink}</span> */}
      </div>
    </div>
  )
}
