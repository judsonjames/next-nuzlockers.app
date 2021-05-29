import { Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { getPokemon } from "../../../apis/pokeapi";
import PokemonEntry from "../../../apis/pokeapi/types/pokemon";
import SiteLayout from "../../../components/SiteLayout";
import { GenerateStaticPaths } from "../../../utils/generators";

export async function getStaticPaths() {
  const response: AxiosResponse = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=10000"
  );
  return GenerateStaticPaths(response, "pokemon");
}

export async function getStaticProps({ params }) {
  const name: string = params.pokemon;
  const pokemon: PokemonEntry = await getPokemon(name);
  return {
    props: {
      pokemon,
    },
  };
}

export default function Pokemon(props) {
  const { pokemon } = props;
  // const imageUrl = pokemon.sprites.front_default;

  return (
    <SiteLayout>
      <Text>Pokemon :: {pokemon.name}</Text>
      {/* <img src={imageUrl} /> */}
    </SiteLayout>
  );
}
