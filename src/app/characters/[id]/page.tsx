import CharacterLayout from '@/Components/characters/Character'
import { creepster } from '@/fonts/Creepescer'
import { Suspense } from 'react'

export default function CharacterPage({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className={` ${creepster.className} flex items-center justify-center h-screen text-green-500 text-3xl font-semibold`}>
          Loading...
        </div>
      }
    >
      <CharacterLayout params={params} />
    </Suspense>
  )
}
