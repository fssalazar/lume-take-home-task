import { DataTable } from '@/components/data-table'
import { fetchDataset } from '@/http/fetchDataset'
import { Suspense } from 'react'
export default async function Home() {
  const dataset = await fetchDataset()

  return (
    <main className="w-full">
      <div className="w-full max-w-5xl mx-auto lg:px-16 px-8 pt-20">
        <h1 className="text-2xl font-bold mb-10">Customer List</h1>
        <Suspense fallback={<h1>loading...</h1>}>
          <DataTable dataset={dataset} />
        </Suspense>
      </div>
    </main>
  )
}
