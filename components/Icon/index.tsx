import React from 'react'
import {
  Close,
  Menu,
  Pin,
  Star
} from './Common'
import { Beach } from './Categories/Beach'
import { Boat } from './Categories/Boat'
import { TouristAttractions } from './Categories/TouristAttractions'
import { Hiking } from './Categories/Hiking'
import { Restaurant } from './Categories/Restaurant'
import { Bar } from './Categories/Bar'
import { NoPhoto } from './NoPhoto'
import { Surf } from './Categories/Surf'
import { LogoLarge, LogoSmall } from './Logo'

const PATHS = {
  'bar': Bar,
  'beach': Beach,
  'boat': Boat,
  'close': Close,
  'hiking': Hiking,
  'logo': LogoLarge,
  'logo-sm': LogoSmall,
  'menu': Menu,
  'no-photo': NoPhoto,
  'pin': Pin,
  'restaurant': Restaurant,
  'star': Star,
  'surf': Surf,
  'tourist-attractions': TouristAttractions,
}

const COLOR = {
  white: 'fill-white',
  black: 'fill-brand-black',
  brand: 'fill-brand-main',
  grey: 'fill-grey',
}

const SIZE = {
  'x-small': '14',
  'small': '24',
  'default': '34',
  'medium': '42',
  'large': '64'
}

interface IconProps {
  color?: 'white' | 'black' | 'brand' | "grey"
  size?: 'x-small' | 'small' | 'default' | 'mediun' | 'large'
  className?: string
  icon: string
}

export const Icon = ({ color, size = 'default', className, icon }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    x="0px" y="0px"
    width={SIZE[size]}
    height={SIZE[size]}
    viewBox="0 0 32 32"
    className={COLOR[color] + ' ' + className}  // TODO: refactor this
  >
    {PATHS[icon]}
  </svg>
)

const Logo = ({ color, className, icon }: IconProps) => {
  const width = icon === 'logo-sm' ? '112' : '162'
  const height = icon === 'logo-sm' ? '24' : '34'

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={COLOR[color] + ' ' + className}  // TODO: refactor this
    >
      {PATHS[icon]}
    </svg>
  )
}
export {
  Logo
}
