import { Heading } from "@chakra-ui/layout";
import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import SiteLayout from "../components/SiteLayout";
import ExternalLink from "../utils/ExternalLink";

export default function Resources() {
  return (
    <SiteLayout>
      <main>
        <Heading className={"text-center underline py-4"}>Resources</Heading>
        <Box className={"text-center"}>
          <Text>This isn't fleshed out yet, but this will work using:</Text>
          <Text>
            <ExternalLink to={"https://pokeapi.co"}>
              <Link>https://pokeapi.co</Link>
            </ExternalLink>
          </Text>
        </Box>
      </main>
    </SiteLayout>
  );
}
