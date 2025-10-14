import Episodes from '@/Components/episodes/Episodes'
import { creepster } from '@/fonts/Creepescer'
import { Suspense } from 'react'

export default function EpisodesPage( ) {
  return (
    <Suspense
      fallback={
        <div className={` ${creepster.className} flex items-center justify-center h-screen text-green-500 text-3xl font-semibold`}>
          Loading...
        </div>
      }
    >
      <Episodes  />
    </Suspense>
  )
}
