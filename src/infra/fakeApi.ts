'use server'

import { PersonProps } from '@/domain/entities/Person'
import fs from 'fs'
import path from 'path'

const filePath = path.resolve(process.cwd(), 'data', 'dataset.json')

export const fetchPeople = (): Promise<PersonProps[]> => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(filePath, 'utf-8')
      const people = JSON.parse(data)
      setTimeout(() => resolve(people), 2000) // Simulate network delay
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchPerson = (): Promise<PersonProps> => {
  return new Promise((resolve, reject) => {
    try {
      const person = {
        name: 'Jane Smith',
        email: 'johndoe12322@gmail.com',
        phone: '2430232325',
        gender: 'male',
        profile_picture:
          'https://images.hellomagazine.com/horizon/landscape/13bd17120306-tom-cruise.jpg?tx=c_limit,w_960',
      } as PersonProps
      setTimeout(() => resolve(person), 1000) // Simulate network delay
    } catch (error) {
      reject(error)
    }
  })
}
