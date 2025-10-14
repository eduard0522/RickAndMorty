import Episode from '@/Components/episodes/Episode'
import { creepster } from '@/fonts/Creepescer'
import { Suspense } from 'react'

export default function EpisodesPage({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className={` ${creepster.className} flex items-center justify-center h-screen text-green-500 text-3xl font-semibold`}>
          Loading...
        </div>
      }
    >
      <Episode params={params} />
    </Suspense>
  )
}
