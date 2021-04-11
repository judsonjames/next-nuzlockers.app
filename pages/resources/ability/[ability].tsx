import { Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { getAbility } from "../../../apis/pokeapi";
import AbilityType from "../../../apis/pokeapi/types/ability";
import SiteLayout from "../../../components/SiteLayout";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const ability: string = context.params.ability as string;
//   const queryClient: QueryClient = new QueryClient();
//   await queryClient.prefetchQuery("ability", () => getAbility(ability));

//   return {
//     props: {
//       ability,
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export async function getStaticPaths() {
  const response: AxiosResponse = await axios.get(
    "https://pokeapi.co/api/v2/ability/?limit=1000"
  );
  const results: any[] = response.data.results;

  const paths = results.map((result) => ({
    params: { ability: result.name },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name: string = params.ability;
  const ability: AbilityType = await getAbility(name);
  // const ability = params.ability;
  // const queryClient: QueryClient = new QueryClient();
  // await queryClient.prefetchQuery("ability", () => getAbility(ability));

  return {
    props: {
      ability,
      // dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Ability(props) {
  const { ability } = props;
  // const { data } = useQuery("ability", () => getAbility(ability));
  return (
    <SiteLayout>
      <Text>Ability :: {ability.name}</Text>
      <br />
      {/* <Text>{ability.effect_entries[1].effect}</Text> */}
    </SiteLayout>
  );
}
