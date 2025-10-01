import PrevPath from '@/Components/buttons/PrevPath'
import Card from '@/Components/characters/card/Card'
import TitlePage from '@/Components/titles/TitlePage'
import { creepster } from '@/fonts/Creepescer'
import { Character } from '@/Interfaces/Character'
import { Episode } from '@/Interfaces/Episode'

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch episode')
  }

  const episode: Episode = await res.json()

  const charIds = episode.characters.map((url) => url.split('/').pop())

  const charsRes = await fetch(
    `https://rickandmortyapi.com/api/character/[${charIds.join(',')}]`
  )
  const characters: Character[] = await charsRes.json()

  return (
    <div className='p-6 text-zinc-50 mx-auto flex flex-col gap-4 justify-center items-center'>
      <TitlePage title={episode.name} />
      <p>Air date: {episode.air_date}</p>
      <p>Code: {episode.episode}</p>

      <h2
        className={`${creepster.className}  text-3xl [text-shadow:0_0_8px_#199948,0_0_12px_#168a41] text-[#1b97d1] transition   text-stroke`}
      >
        Characters
      </h2>
      <div className='grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 w-full max-w-7xl  '>
        {characters.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>

      <PrevPath />
    </div>
  )
}
