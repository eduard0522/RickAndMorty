"use client"

import Card from "@/Components/characters/card/Card";
import { useEffect, useState } from "react";
import { Creepster } from "next/font/google";

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});


interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: { name: string };
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-20">Cargando personajes...</p>;

  return (
    <div className="min-h-screen text-white flex flex-col items-center ">
      <h1   className= { `${creepster.className}  [text-shadow:0_0_8px_#4dd613,0_0_12px_#7eec10] text-[#02B5CA] transition text-6xl py-4 text-stroke-200`}
          >
        Personajes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 w-full max-w-7xl mt-4 pb-8">
        {characters.map((char) => (
            <Card key={char.id}  char={char}/>
        ))}
      </div>
    </div>
  );
}
