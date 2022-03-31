import React from 'react'
import {
  Close,
  Menu,
  Location
} from './Paths'

const PATHS = {
  close: Close,
  menu: Menu,
  location: Location
}

const COLOR = {
  white: 'fill-white',
  black: 'fill-black',
  brand: 'fill-brand-main',
}

const SIZE = {
  small: '16',
  default: '32',
  medium: '42',
  large: '64'
}

interface IconProps {
  color?: 'white' | 'black' | 'brand'
  size?: 'small' | 'default' | 'mediun' | 'large'
  className?: string
  icon: string
}

export const Icon = ({ color, size = 'default', className, icon }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width={SIZE[size]}
    height={SIZE[size]}
    viewBox="0 0 30 30"
    className={COLOR[color]}
  >
    {PATHS[icon]}
  </svg>
)
