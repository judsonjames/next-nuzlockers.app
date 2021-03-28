import { Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getPokemon } from "../../../apis/pokeapi";
import SiteLayout from "../../../components/SiteLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pokemon: string = context.params.pokemon as string;
  const queryClient: QueryClient = new QueryClient();
  await queryClient.prefetchQuery("pokemon", () => getPokemon(pokemon));

  return {
    props: {
      pokemon,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Ability(props) {
  const { pokemon } = props;
  const { data } = useQuery("pokemon", () => getPokemon(pokemon));

  const imageUrl = data.sprites.front_default;

  return (
    <SiteLayout>
      <Text>Pokemon :: {data.name}</Text>
      <img src={imageUrl} />
    </SiteLayout>
  );
}
