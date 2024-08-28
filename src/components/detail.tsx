'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { PersonProps } from '@/domain/entities/Person'
import { useEffect, useState } from 'react'
import { getPersonDetails } from '@/application/personService'

interface Props {
  open: boolean
  onClose: () => void
}

export function Detail({ open, onClose }: Props) {
  const [detail, setDetail] = useState<PersonProps | null>(null)

  useEffect(() => {
    if (open) {
      ;(async () => {
        try {
          const response = await getPersonDetails()
          setDetail(response)
        } catch (error) {
          console.error('Failed to fetch person details:', error)
        }
      })()
    } else {
      setDetail(null)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Additional Info</DialogTitle>
        </DialogHeader>
        {detail ? (
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
              <p>Name: {detail.name}</p>
              <p>Email: {detail.email}</p>
              <p>Gender: {detail.gender}</p>
              <p>Phone Number: +{detail.phone}</p>
            </div>
          </DialogDescription>
        ) : (
          <div>Loading...</div>
        )}
      </DialogContent>
    </Dialog>
  )
}
