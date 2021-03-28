import { Heading } from "@chakra-ui/layout";
import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import SiteLayout from "../../components/SiteLayout";
import ExternalLink from "../../utils/ExternalLink";

export default function Resources(props) {
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

          <div className={"py-3 underline"}>
            <p>For example, look at how these are being used</p>
          </div>
          <div className={"py-3"}>
            <NextLink href={"/resources/ability/limber"}>
              <a>
                <Link>http://localhost:3000/resources/ability/limber</Link>
              </a>
            </NextLink>
          </div>
          <div className={"py-3"}>
            <NextLink href={"/resources/location/canalave-city"}>
              <a>
                <Link>
                  http://localhost:3000/resources/location/canalave-city
                </Link>
              </a>
            </NextLink>
          </div>
          <div className={"py-3"}>
            <NextLink href={"/resources/pokemon/pikachu"}>
              <a>
                <Link>http://localhost:3000/resources/pokemon/pikachu</Link>
              </a>
            </NextLink>
          </div>
          <div className={"py-3"}>
            <NextLink href={"/resources/region/johto"}>
              <a>
                <Link>http://localhost:3000/resources/region/johto</Link>
              </a>
            </NextLink>
          </div>
        </Box>
      </main>
    </SiteLayout>
  );
}
