'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Person } from '@/entities/person'

interface Props {
  open: boolean
  onClose: () => void
  data: Person
}

export function Detail({ open, onClose, data }: Props) {
  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Additional Info</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col items-center">
          <div className="space-y-2">
            <Image
              className="w-48 h-48 object-cover rounded-full"
              src={
                'https://images.hellomagazine.com/horizon/landscape/13bd17120306-tom-cruise.jpg?tx=c_limit,w_960'
              }
              alt="profile-image"
              height={500}
              width={500}
            />
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Gender: {data.gender}</p>
            <p>Phone Number: +{data.phone}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
