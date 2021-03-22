import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { MdArrowForward, MdSearch } from "react-icons/md";
import SiteLayout from "../components/SiteLayout";
import users from "../data/users.json";
import ExternalLink from "../utils/ExternalLink";

function OnInputKeyDown(event: React.KeyboardEventHandler<HTMLInputElement>) {}

export default function Explore() {
  const router: NextRouter = useRouter();
  const query: ParsedUrlQuery = router.query;
  // const search: string = query.search;
  const { theme } = useTheme();

  return (
    <SiteLayout>
      <main>
        <Heading className={"text-center underline py-4"}>Explore</Heading>
        <Text className={"text-center underline text-xl pb-4"}>
          Discover a new friend in the community, or find a new strategy to
          consider!
        </Text>
        <InputGroup maxW={"75%"} mx={"auto"} pb={3}>
          <InputLeftElement
            children={<MdSearch />}
            color={theme === "dark" ? "gray.300" : "gray.800"}
          />
          <Input
            placeholder={"Search for Nuzlocker"}
            backgroundColor={"white"}
            size={"md"}
            variant={"outline"}
            color={theme === "dar" ? "gray.300" : "gray.800"}
          />
          <InputRightElement
            children={<MdArrowForward />}
            color={theme === "dark" ? "gray.300" : "gray.800"}
          />
        </InputGroup>
        <Stack maxW={"75%"} mx={"auto"}>
          {Object.values(users).map((user, i) => (
            <Box
              key={`user-${i}`}
              display={"flex"}
              py={2}
              my={3}
              border={"2px"}
              borderRadius={"3xl"}>
              <NextLink href={`/${user.username.toLowerCase()}`}>
                <Image
                  src={user.profilePic}
                  cursor={"pointer"}
                  className={"w-20 sm:w-24 rounded-full"}
                  mx={5}
                />
              </NextLink>
              <Box mx={5} className={"truncate"}>
                <Text>{user.name}</Text>
                <Text>@{user.username}</Text>
              </Box>
              <Box mx={5} className={"truncate hidden sm:block"}>
                <Text>
                  {user.social.twitter && (
                    <ExternalLink to={user.social.twitter}>
                      {user.social.twitter}
                    </ExternalLink>
                  )}
                </Text>
                <Text>
                  {user.social.youtube && (
                    <ExternalLink to={user.social.youtube}>
                      {user.social.youtube}
                    </ExternalLink>
                  )}
                </Text>
                <Text>
                  {user.social.twitch && (
                    <ExternalLink to={user.social.twitch}>
                      {user.social.twitch}
                    </ExternalLink>
                  )}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </main>
    </SiteLayout>
  );
}
