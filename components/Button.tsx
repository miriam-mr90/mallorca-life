import React from 'react'

interface ButtonProps {
  type?: 'primary' | 'outlined' | 'link'
  withIcon?: boolean
  disabled?: boolean
  label?: string,
  onClick?: () => void
}


export const Button = ({
  type = 'primary',
  withIcon = false,
  disabled = false,
  label,
  onClick,
}: ButtonProps) => (
  <button
    type='button'
    className='p-3 font-semibold bg-white text-brand-main rounded-xl w-max'
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
)
