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

const formatPrice = (price: string) => {
  const completedPrice = () => {
    let result = ''
    for (let count = 0; count < 5 - price.length; count++) {
      result = `${result}€`
    }
    return result
  }
  return completedPrice()
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
  console.log('cover', cover)
  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-2xl sm:h-full">
      <div className="relative w-full overflow-hidden h-44 shrink-0 rounded-t-2xl">
        <Image
          src={`/${cover}`}
          // src="/images/buscando-el-norte.jpeg"
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className="p-4">
        <p className="mb-1 font-semibold">{title}</p>
        <div className="flex items-center justify-between text-sm text-grey">
          <p>{type || '-'}</p>
          {price &&
            <p>
              <span className="text-gold">{price}</span>
              {formatPrice(price)}
            </p>
          }
        </div>
      </div>
    </div>
  )
}
