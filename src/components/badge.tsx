import React from 'react'

interface Props {
  text: string
  variant: 'primary' | 'secondary'
}

export const Badge = ({ text, variant = 'primary' }: Props) => {
  const baseClasses =
    'inline-block px-3 py-1 rounded-full text-sm font-semibold capitalize'
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-400/20 text-blue-400'
      : 'bg-red-400/20 text-red-400'

  return <span className={`${baseClasses} ${variantClasses}`}>{text}</span>
}
