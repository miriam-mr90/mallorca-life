import React from 'react'

interface ButtonProps {
  type?: 'primary' | 'outlined' | 'link'
  icon?: string
  disabled?: boolean
  children?: any,
  onClick: () => void
}


export const Button = ({
  type = 'primary',
  disabled = false,
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => (
  <button
    type='button'
    className={`p-3 font-semibold ${type === 'primary' ? 'bg-white text-brand-main' : 'bg-brand-main text-white'} rounded-xl w-max`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)
