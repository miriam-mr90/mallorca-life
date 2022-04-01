import React from "react";
import Image from 'next/image'
import NextLink from 'next/link'
import { Icon } from '@/components/Icon'

// Todo: import RestauranProps
interface CardProps {
  title: string
  cover: string
  address: string
  description: string | null | undefined
  locationLink: string | null | undefined
  type: string | null | undefined
  price: string | null | undefined
}

export const RestaurantCard = ({
  title,
  cover,
  description,
  address,
  locationLink,
  type,
  price
}:CardProps) => {
  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-2xl">
      <div className="relative w-full overflow-hidden h-44 shrink-0 rounded-t-2xl">
        <Image
          // src={`/${cover}`}
          src="/images/buscando-el-norte.jpeg"
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className="p-4">
        <p className="mb-1 text-sm font-semibold">{title}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-grey">{type || '-'}</span>
          <span className="text-sm text-grey">{price || '€€€€€'}</span>
        </div>
        {/* {locationLink && (
          <NextLink href={locationLink}>
            <a className='flex justify-center' target="_blank">
              <Icon icon="pin" color="brand" size="x-small" className="mt-0.5 mr-1"/>
              <span className="flex-1 text-sm text-grey">{address}</span>
            </a>
          </NextLink>
        )}

        {address && !locationLink && (
          <div className="flex justify-center">
            <Icon icon="pin" color="brand" size="x-small" className="mt-0.5 mr-1"/>
            <span className="flex-1 text-sm text-grey">{address}</span>
          </div>
        )} */}
      </div>
    </div>
  )
}
