'use client'

import { FixedSizeList as List } from 'react-window'
import { useState } from 'react'
import { Badge } from './badge'
import { MenuAction } from './menu-action'
import { Detail } from './detail'
import { ChevronDownIcon } from 'lucide-react'
import { PersonProps } from '@/domain/entities/Person'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Props {
  dataset: PersonProps[]
}

export function DataTable({ dataset }: Props) {
  const [openInfoViwerModal, setOpenInfoViwerModal] = useState(false)
  const [data, _] = useState(dataset)

  const searchParams = useSearchParams()
  const orderByType = searchParams.get('orderByType')

  return (
    <div className="w-full h-full text-slate-700 mb-10">
      <div className="w-full grid grid-cols-12 px-4 relative gap-3 mb-4 font-semibold">
        <Link
          href={'/?orderByType=name'}
          className="col-span-2 flex items-center hover:cursor-pointer"
        >
          Name
          <ChevronDownIcon
            className={`${orderByType === 'name' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </Link>
        <Link
          href={'/?orderByType=email'}
          className="col-span-4 flex items-center hover:cursor-pointer"
        >
          Email
          <ChevronDownIcon
            className={`${orderByType === 'email' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </Link>
        <Link
          href={'/?orderByType=phone'}
          className="col-span-3 flex items-center hover:cursor-pointer"
        >
          Phone
          <ChevronDownIcon
            className={`${orderByType === 'phone' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </Link>
        <Link
          href={'/?orderByType=gender'}
          className="col-span-2 flex items-center hover:cursor-pointer"
        >
          Gender
          <ChevronDownIcon
            className={`${orderByType === 'gender' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </Link>
        <div className="col-span-1"></div>
      </div>
      <List
        innerElementType="div"
        itemCount={dataset.length}
        itemSize={60}
        height={1000}
        width={'100%'}
      >
        {({ index, style }) => {
          return (
            <div style={style}>
              <div className="w-full grid grid-cols-12 bg-white rounded-lg py-3 px-4 relative gap-3">
                <div className="col-span-2  truncate">
                  <p className="truncate">{data[index].name}</p>
                </div>
                <div className="col-span-4">
                  <p className="truncate">{data[index].email}</p>
                </div>
                <div className="col-span-3">
                  <p className="truncate">{data[index].phone}</p>
                </div>
                <div className="col-span-2">
                  <p className="truncate">
                    {
                      <Badge
                        variant={
                          data[index].gender === 'male'
                            ? 'primary'
                            : 'secondary'
                        }
                        text={data[index].gender}
                      />
                    }
                  </p>
                </div>
                <div className="col-span-1">
                  <MenuAction onClick={() => setOpenInfoViwerModal(true)} />
                </div>
              </div>
            </div>
          )
        }}
      </List>
      {openInfoViwerModal && (
        <Detail
          open={!!openInfoViwerModal}
          onClose={() => setOpenInfoViwerModal(false)}
        />
      )}
    </div>
  )
}
