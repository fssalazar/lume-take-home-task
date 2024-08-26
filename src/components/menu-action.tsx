'use client'

import { Eye } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

interface Props {
  onClick: () => void
}

export function MenuAction({ onClick }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>...</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Invoice Receivable</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2" onClick={() => onClick()}>
          <Eye size={16} />
          View
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
