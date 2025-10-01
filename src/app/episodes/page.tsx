"use client";

import { useEffect, useState } from "react";
import ButtonGreen from "@/Components/buttons/ButtonGreen";
import TitlePage from "@/Components/titles/TitlePage";
import { creepster } from "@/fonts/Creepescer";
import { Episode } from "@/Interfaces/Episode";
import Card from "@/Components/episodes/Card";


export default function Home() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        setPages(data.info.pages);
        setLoading(false);
      });
  }, [page]);

  if (loading)
    return <p className="text-center mt-20">Cargando episodios...</p>;

  return (
    <div className="min-h-screen text-white flex flex-col items-center ">
      <TitlePage title="Episodios" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 w-full max-w-7xl mt-4 ">
        {episodes.map((ep) => (
          <Card  key={ep.id} episode={ep}/>
        ))}
      </div>

      <div
        className={`${creepster.className} flex items-center gap-4 mt-8 pb-8 `}
      >
        <ButtonGreen
          text="Anterior"
          path=""
          action={() => setPage((p) => Math.max(1, p - 1))}
        />
        <span className="font-sans">
          Página {page} de {pages}
        </span>
        
        <ButtonGreen
          text="Siguiente"
          path=""
          action={() => setPage((p) => Math.min(pages, p + 1))}
        />
      </div>
    </div>
  );
}
