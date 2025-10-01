"use client";

import { useEffect, useState } from "react";
import Feature from "./Feature";

interface Episode {
  id: number;
  name: string;
  episode: string; 
  air_date: string;
}

interface Character {
  id: number;
  name: string;
  episode: string[]; 
}

interface Props {
  character: Character;
}

const FirstEpisode: React.FC<Props> = ({ character }) => {
  const [firstEpisode, setFirstEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    if (character.episode.length > 0) {
      const firstEpisodeUrl = character.episode[0];
      fetch(firstEpisodeUrl)
        .then((res) => res.json())
        .then((data: Episode) => setFirstEpisode(data))
        .catch((err) => console.error("Error fetching first episode:", err));
    }
  }, [character]);

  if (!firstEpisode) {
    return <p>Cargando primer episodio...</p>;
  }

  return (
    <div className="flex flex-col gap-8">
        <Feature subtitle="Fist Episode" content={firstEpisode.name } />
        <Feature subtitle="Air Date" content={firstEpisode.air_date} />
    </div>
  );
};

export default FirstEpisode;