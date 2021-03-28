import { Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getRegion } from "../../../apis/pokeapi";
import SiteLayout from "../../../components/SiteLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const region: string = context.params.region as string;
  const queryClient: QueryClient = new QueryClient();
  await queryClient.prefetchQuery("region", () => getRegion(region));

  return {
    props: {
      region,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Ability(props) {
  const { region } = props;
  const { data } = useQuery("region", () => getRegion(region));

  return (
    <SiteLayout>
      <Text>location :: {data.name}</Text>
    </SiteLayout>
  );
}
