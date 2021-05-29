import axios from "axios";
import Ability from "./types/ability";
import Item from "./types/item";
import Location from "./types/location";
import Pokemon from "./types/pokemon";
import Region from "./types/region";

const pokeapiURL: string = "https://pokeapi.co/api/v2/";

/**
 * This will likely be rewritten with HTTP Resources, Axios is just a start
 */

export const getAbility = async (ability: string): Promise<Ability> => {
  const { data } = await axios.get(`${pokeapiURL}/ability/${ability}`);
  return data;
};

export const getPokemon = async (ability: string): Promise<Pokemon> => {
  const { data } = await axios.get(`${pokeapiURL}/pokemon/${ability}`);
  return data;
};

export const getLocations = async (location: string): Promise<Location> => {
  const { data } = await axios.get(`${pokeapiURL}/location/${location}`);
  return data;
};

export const getRegion = async (region: string): Promise<Region> => {
  const { data } = await axios.get(`${pokeapiURL}/region/${region}`);
  return data;
};

export const getItem = async (region: string): Promise<Item> => {
  const { data } = await axios.get(`${pokeapiURL}/item/${region}`);
  return data;
};
