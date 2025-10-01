import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/Interfaces/Character';
import { creepster } from '@/fonts/Creepescer';

interface Props {char : Character}

const Card: NextPage<Props> = ({ char }) => {

  let colorStatus = ''

  switch(char.status){
    case'Alive':
       colorStatus = "bg-green-500"
       break;
    case'Dead':
       colorStatus = "bg-red-500"
       break;
    case'unknown':
      colorStatus = "bg-yellow-500"
        break;
    default:
      break
  }

  return  <Link href={`/characters/${char.id}`}>
       <div
            className="w-4/5 xl:h-96 md:w-full mx-auto bg-gradient-to-br from-[#012a18] to-[#01393a] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image 
              src={char.image} 
              alt={char.name} 
              width={56}
              height={56}
              className="w-full h-56 object-cover" 
            />
            <div className="p-4">

              <h2 className= { ` ${creepster.className} text-xl font-bold [text-shadow:0_0_8px_#22c55e,0_0_12px_#22c55e] text-[#1e96ce] text-stroke `}
             
              >{char.name}</h2>
              <p className="text-sm flex items-center gap-2" >
                <span className="font-semibold" > Status: </span> {char.status} <div className={`${colorStatus}  w-2 h-2 rounded-full`}> </div>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Specie:</span> {char.species}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Origin:</span> {char.origin.name}
              </p>
            </div>
          </div>
  </Link>
}

export default Card