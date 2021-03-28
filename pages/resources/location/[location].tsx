import { Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getLocations } from "../../../apis/pokeapi";
import SiteLayout from "../../../components/SiteLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const location: string = context.params.location as string;
  const queryClient: QueryClient = new QueryClient();
  await queryClient.prefetchQuery("location", () => getLocations(location));

  return {
    props: {
      location,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Ability(props) {
  const { location } = props;
  const { data } = useQuery("location", () => getLocations(location));

  return (
    <SiteLayout>
      <Text>location :: {data.name}</Text>
    </SiteLayout>
  );
}
