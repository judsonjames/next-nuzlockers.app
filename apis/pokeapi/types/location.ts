export interface Area {
  name: string;
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  generation: Generation;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Region {
  name: string;
  url: string;
}

export default interface Location {
  areas: Area[];
  game_indices: GameIndice[];
  id: number;
  name: string;
  names: Name[];
  region: Region;
}
