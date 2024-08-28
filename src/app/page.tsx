import { getPeopleForTable } from '@/application/personService'
import { DataTable } from '@/components/data-table'
import { Suspense } from 'react'

async function DataTableWrapper({ orderByType }: any) {
  const dataset = await getPeopleForTable(orderByType)
  return <DataTable dataset={dataset} />
}
export default async function Home({ searchParams }: any) {
  return (
    <main className="w-full">
      <div className="w-full max-w-5xl mx-auto lg:px-16 px-8 pt-20">
        <h1 className="text-2xl font-bold mb-10">Customer List</h1>
        <Suspense fallback={<h1>loading...</h1>}>
          <DataTableWrapper orderByType={searchParams.orderByType || 'name'} />
        </Suspense>
      </div>
    </main>
  )
}
