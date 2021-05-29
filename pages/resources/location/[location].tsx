import { Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { getLocations } from "../../../apis/pokeapi";
import LocationType from "../../../apis/pokeapi/types/location";
import SiteLayout from "../../../components/SiteLayout";
import { GenerateStaticPaths } from "../../../utils/generators";

export async function getStaticPaths() {
  const response: AxiosResponse = await axios.get(
    "https://pokeapi.co/api/v2/location/?limit=1000"
  );
  return GenerateStaticPaths(response, "location");
}

export async function getStaticProps({ params }) {
  const name: string = params.location;
  const location: LocationType = await getLocations(name);
  return {
    props: {
      location,
    },
  };
}

export default function Location(props) {
  const { location } = props;

  return (
    <SiteLayout>
      <Text>location :: {location.name}</Text>
    </SiteLayout>
  );
}
