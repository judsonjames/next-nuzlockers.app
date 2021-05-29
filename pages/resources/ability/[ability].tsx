import { Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { getAbility } from "../../../apis/pokeapi";
import AbilityType from "../../../apis/pokeapi/types/ability";
import SiteLayout from "../../../components/SiteLayout";
import { GenerateStaticPaths } from "../../../utils/generators";

export async function getStaticPaths() {
  const response: AxiosResponse = await axios.get(
    "https://pokeapi.co/api/v2/ability/?limit=1000"
  );
  return GenerateStaticPaths(response, "ability");
}

export async function getStaticProps({ params }) {
  const name: string = params.ability;
  const ability: AbilityType = await getAbility(name);
  return {
    props: {
      ability,
    },
  };
}

export default function Ability(props) {
  const { ability } = props;
  return (
    <SiteLayout>
      <Text>Ability :: {ability.name}</Text>
      <br />
      {/* <Text>{ability.effect_entries[1].effect}</Text> */}
    </SiteLayout>
  );
}
