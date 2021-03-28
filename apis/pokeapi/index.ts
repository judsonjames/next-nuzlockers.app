import axios from "axios";

const pokeapiURL: string = "https://pokeapi.co/api/v2/";

export const getAbility = async (ability: string) => {
  const { data } = await axios.get(`${pokeapiURL}/ability/${ability}`);
  return data;
};

export const getPokemon = async (ability: string) => {
  const { data } = await axios.get(`${pokeapiURL}/pokemon/${ability}`);
  return data;
};

export const getLocations = async (location: string) => {
  const { data } = await axios.get(`${pokeapiURL}/location/${location}`);
  return data;
};

export const getRegion = async (region: string) => {
  const { data } = await axios.get(`${pokeapiURL}/region/${region}`);
  return data;
};
