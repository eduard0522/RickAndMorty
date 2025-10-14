import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Character } from '@/Interfaces/Character'
import { creepster } from '@/fonts/Creepescer'

interface Props {
  char: Character
}

const Card: NextPage<Props> = ({ char }) => {
  let colorStatus = ''

  switch (char.status) {
    case 'Alive':
      colorStatus = 'bg-green-500'
      break
    case 'Dead':
      colorStatus = 'bg-red-500'
      break
    case 'unknown':
      colorStatus = 'bg-yellow-500'
      break
    default:
      break
  }

  return (
    <Link href={`/characters/${char.id}`}>
      <div className='w-4/5 md:w-full mx-auto rounded-2xl shadow-lg overflow-hidden text-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
        <Image
          src={char.image}
          alt={char.name}
          width={56}
          height={56}
          className='w-56 h-56 rounded-full'
        />
        <div className='p-4 flex items-center justify-center gap-4'>
          <h2
            className={` ${creepster.className} text-xl font-bold [text-shadow:0_0_8px_#22c55e,0_0_12px_#22c55e] text-[#1e96ce] text-stroke `}
          >
            {char.name}
          </h2>
          <div className={`${colorStatus}  w-2 h-2 rounded-full`}> </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
