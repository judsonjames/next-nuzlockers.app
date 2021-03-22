import {
  Box,
  Heading,
  Stack,
  StackDivider,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
// import { ThemeContext } from "@emotion/react";
import React from "react";
import SiteLayout from "../components/SiteLayout";
import store from "../data/store.json";
import users from "../data/users.json";
import { User } from "../utils/types";

// function ToggleDarkTheme(): void {
//   const currentTheme: string = localStorage.getItem(themeKey);
//   localStorage.setItem(themeKey, currentTheme === "dark" ? "light" : "dark");
// }

// function IsDarkTheme(): boolean {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(themeKey) === "dark";
//   }
//   return false;
// }

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const username: string = store.user;
  const user: User = users[username];

  function ToggleDarkTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <SiteLayout>
      <main>
        <Heading className={"text-center underline py-4"}>Settings</Heading>
        <Tabs size={"lg"} variant={"enclosed"}>
          <TabList>
            <Tab>Account</Tab>
            <Tab>Appearance</Tab>
          </TabList>
          <TabPanels>
            <TabPanel mx={"auto"} w={"75%"}>
              <Text>Username: @{user.username}</Text>
              <Text>Account Name: {user.name}</Text>
            </TabPanel>
            <TabPanel mx={"auto"} w={"75%"}>
              <Stack
                divider={
                  <StackDivider
                    borderColor={theme === "dark" ? "gray.300" : "gray.800"}
                  />
                }>
                <Box display={"flex"}>
                  <Text>Dark Theme</Text>
                  <Switch
                    id="dark-theme"
                    onChange={ToggleDarkTheme}
                    defaultChecked={theme === "dark"}
                    mx={5}
                  />
                </Box>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </SiteLayout>
  );
}
