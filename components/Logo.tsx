import React from "react"
import NextLink from 'next/link'

interface LogoProps {
  theme?: 'brand' | 'white'
  size?: 'small' | 'medium' | 'large'
  className?: string
}
export const Logo = ({ theme= 'brand', size ='small', className=''}:LogoProps) => {
  const baseSize = size === 'small' ? '3xl' : '4xl'
  const labelSize = size === 'small' ? 'xl' : '3xl'

  const baseColor = theme === 'white' ? 'white' : 'brand-main'
  const labelColor = theme === 'white' ? 'white' : 'brand-main'

  return (
    <NextLink href='/'>
      <a className={`text-${baseSize} font-semibold text-${baseColor}`}>
        Mallorca
        <span className={`font-light text-${labelColor} text-${labelSize}`}>life</span>
      </a>
    </NextLink>
  )
}
