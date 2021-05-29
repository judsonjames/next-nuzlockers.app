import { Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { getRegion } from "../../../apis/pokeapi";
import RegionEntry from "../../../apis/pokeapi/types/region";
import SiteLayout from "../../../components/SiteLayout";
import { GenerateStaticPaths } from "../../../utils/generators";

export async function getStaticPaths() {
  const response: AxiosResponse = await axios.get(
    "https://pokeapi.co/api/v2/region?limit=10000"
  );
  return GenerateStaticPaths(response, "region");
}

export async function getStaticProps({ params }) {
  const name: string = params.region;
  const region: RegionEntry = await getRegion(name);
  return {
    props: {
      region,
    },
  };
}

export default function Region(props) {
  const { region } = props;

  return (
    <SiteLayout>
      <Text>location :: {region.name}</Text>
    </SiteLayout>
  );
}
