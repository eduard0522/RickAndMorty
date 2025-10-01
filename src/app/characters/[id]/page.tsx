import PrevPath from "@/Components/buttons/PrevPath";
import Feature from "@/Components/characters/Feature";
import FirstEpisode from "@/Components/characters/FirstEpisode";
import TitlePage from "@/Components/titles/TitlePage";
import Image from "next/image";
import { Character} from "@/Interfaces/Character";

export default async function CharacterPage({ params }: { params:Promise <{ id: string }> }) {

  const { id } = await params

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center text-white py-8">
      <TitlePage title={character.name} />

      <section className="flex flex-col  md:flex-row gap-8">
         <div>
          <Image src={character.image} alt={character.name} width={450} height={100} className="rounded-xl shadow-2xl mb-4" />
      </div>
      <div className="flex flex-col gap-8 text-xl items-center md:items-start">
        <Feature  subtitle="Status" content={character.status}/>
        <Feature  subtitle="Specie" content={character.species}/>
        <Feature  subtitle="Type" content={ character.type !== "" ? character.type : 'Unknown'}/>
        <Feature  subtitle="Origin" content={character.origin.name}/>
        <Feature  subtitle="Gender" content={character.gender}/>
        <Feature  subtitle="Location" content={character.location.name}/>
        <FirstEpisode character={character} />
      </div>
      </section>
      <PrevPath />
    </div>
  );
}
