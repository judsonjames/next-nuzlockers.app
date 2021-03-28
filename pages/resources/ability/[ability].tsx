import { Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getAbility } from "../../../apis/pokeapi";
import SiteLayout from "../../../components/SiteLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ability: string = context.params.ability as string;
  const queryClient: QueryClient = new QueryClient();
  await queryClient.prefetchQuery("ability", () => getAbility(ability));

  return {
    props: {
      ability,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Ability(props) {
  const { ability } = props;
  const { data } = useQuery("ability", () => getAbility(ability));
  return (
    <SiteLayout>
      <Text>Ability :: {data.name}</Text>
      <br />
      <Text>{data.effect_entries[1].effect}</Text>
    </SiteLayout>
  );
}
