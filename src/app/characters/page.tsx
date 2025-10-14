import Characters from '@/Components/characters/Characters'
import { creepster } from '@/fonts/Creepescer'
import { NextPage } from 'next'
import { Suspense } from 'react'

const Page: NextPage = ({}) => {
  return <Suspense
        fallback={
          <div className={` ${creepster.className} flex items-center justify-center h-screen text-green-500 text-3xl font-semibold`}>
            Loading...
          </div>
        }
      >
        <Characters />
      </Suspense>
}

export default Page