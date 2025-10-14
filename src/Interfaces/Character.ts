export interface Character {
  id: number;
  name: string;
  status: string;
  type: string;
  species: string;
  image: string;
  origin: { name: string };
  gender: string
  location: { name : string}
  episode : string[]
}

