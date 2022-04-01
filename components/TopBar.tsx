import React from "react"
import NextLink from 'next/link'
import { Icon, Logo } from '@/components/Icon'

export interface HeaderProps {
  setSideBar: (sideBar: boolean) => void
  isHome: boolean
}

export const TopBar: React.FC<HeaderProps> = ({setSideBar, isHome }) => (
  <div className="flex justify-center p-6">
    {!isHome && (
      <NextLink href="/">
        <a className='flex justify-center'>
          <Logo icon="logo-sm" color="brand" />
        </a>
      </NextLink>
    )}
    <button
      onClick={() => setSideBar(true)}
      className="absolute right-6"
    >
      <Icon icon='menu' color={isHome ? 'white' : 'brand'}/>
    </button>
  </div>
)
