import { PersonProps } from '@/domain/entities/Person'
import { fetchPeople, fetchPerson } from '@/infra/fakeApi'

export const getPeopleForTable = async (
  sortBy: keyof PersonProps,
): Promise<PersonProps[]> => {
  const people = await fetchPeople()
  if (sortBy) {
    const sortedPeople = people.sort((a, b) => {
      if (a[sortBy]! < b[sortBy]!) return -1
      if (a[sortBy]! > b[sortBy]!) return 1
      return 0
    })
    return sortedPeople
  }

  return people
}

export const getPersonDetails = async (): Promise<PersonProps> => {
  const person = await fetchPerson()
  return person
}
