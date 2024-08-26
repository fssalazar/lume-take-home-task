/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Person } from '@/entities/person'
import { FixedSizeList as List } from 'react-window'
import { useEffect, useState } from 'react'
import { Badge } from './badge'
import { MenuAction } from './menu-action'
import { Detail } from './detail'
import { ChevronDownIcon } from 'lucide-react'

interface Props {
  dataset: Person[]
}

export function DataTable({ dataset }: Props) {
  const [data, setData] = useState(dataset)
  const [orderByType, setOrderByType] = useState<
    'name' | 'email' | 'phone' | 'gender' | undefined
  >()
  const [openInfoViwerModal, setOpenInfoViwerModal] = useState<
    Person | undefined
  >()

  function sortData() {
    if (orderByType) {
      data.sort((a, b) => {
        if (a[orderByType] < b[orderByType]) {
          return -1
        }
        if (a[orderByType] > b[orderByType]) {
          return 1
        }
        return 0
      })

      setData([...data])
    } else {
      setData([...dataset])
    }
  }

  useEffect(() => {
    sortData()
  }, [orderByType])

  return (
    <div className="w-full h-full text-slate-700 mb-10">
      <div className="w-full grid grid-cols-12 px-4 relative gap-3 mb-4 font-semibold">
        <div
          className="col-span-2 flex items-center hover:cursor-pointer"
          onClick={() => {
            if (orderByType === 'name') {
              return setOrderByType(undefined)
            }
            setOrderByType('name')
          }}
        >
          Name
          <ChevronDownIcon
            className={`${orderByType === 'name' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </div>
        <div
          className="col-span-4 flex items-center hover:cursor-pointer"
          onClick={() => {
            if (orderByType === 'email') {
              return setOrderByType(undefined)
            }
            setOrderByType('email')
          }}
        >
          Email
          <ChevronDownIcon
            className={`${orderByType === 'email' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </div>
        <div
          className="col-span-3 flex items-center hover:cursor-pointer"
          onClick={() => {
            if (orderByType === 'phone') {
              return setOrderByType(undefined)
            }
            setOrderByType('phone')
          }}
        >
          Phone
          <ChevronDownIcon
            className={`${orderByType === 'phone' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </div>
        <div
          className="col-span-2 flex items-center hover:cursor-pointer"
          onClick={() => {
            if (orderByType === 'gender') {
              return setOrderByType(undefined)
            }
            setOrderByType('gender')
          }}
        >
          Gender
          <ChevronDownIcon
            className={`${orderByType === 'gender' ? 'rotate-180' : 'rotate-0'} transition-all`}
          />
        </div>
        <div className="col-span-1"></div>
      </div>
      <List
        innerElementType="div"
        itemCount={data.length}
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
                  <MenuAction
                    onClick={() => setOpenInfoViwerModal(data[index])}
                  />
                </div>
              </div>
            </div>
          )
        }}
      </List>
      {openInfoViwerModal && (
        <Detail
          data={openInfoViwerModal}
          open={!!openInfoViwerModal}
          onClose={() => setOpenInfoViwerModal(undefined)}
        />
      )}
    </div>
  )
}
