export interface Location {
  name: string;
  url: string;
}

export interface MainGeneration {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Pokedex {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export default interface Region {
  id: number;
  locations: Location[];
  main_generation: MainGeneration;
  name: string;
  names: Name[];
  pokedexes: Pokedex[];
  version_groups: VersionGroup[];
}
