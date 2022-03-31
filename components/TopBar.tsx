import React from "react"
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'

export interface HeaderProps {
  setSideBar: (sideBar: boolean) => void
  isHome: boolean
}

export const TopBar: React.FC<HeaderProps> = ({setSideBar, isHome }) => (
  <div className="flex justify-center p-6">
    {!isHome && (
      <Logo size="small"/>
    )}
    <button
      onClick={() => setSideBar(true)}
      className="absolute right-6"
    >
      <Icon icon='menu' color={isHome ? 'white' : 'brand'}/>
    </button>
  </div>
)
