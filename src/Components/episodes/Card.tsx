import { creepster } from '@/fonts/Creepescer'
import { Episode } from '@/Interfaces/Episode'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props { episode: Episode }

const Card: NextPage<Props> = ({ episode }) => {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <div
        key={episode.id}
        className="bg-gradient-to-br from-[#012a18] to-[#01393a] h-36 flex flex-col gap-1 justify-center rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer p-4"
      >
        <h2 className="text-lg font-bold">
          <span className={`${creepster.className} text-blue-500 text-stroke`}>
            Name
          </span>
          : {episode.name}
        </h2>
        
        <p className="text-sm text-gray-100">
          <span className={`${creepster.className} text-blue-500 text-stroke`}>
            Episode
          </span>
          : {episode.episode}
        </p>

        <p className="text-sm text-gray-100">
          <span className={`${creepster.className} text-blue-500 text-stroke`}>
            Air_Date
          </span>
          : {episode.air_date}
        </p>

      </div>
    </Link>
  )
}
export default Card