import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  MdCollectionsBookmark,
  MdExplore,
  MdHome,
  MdMenu,
  MdSettings,
} from "react-icons/md";
import store from "../data/store.json";
import users from "../data/users.json";
import { User } from "../utils/types";

type LinkProps = {
  to: string;
  icon: any;
  title: string;
  className?: string;
  iconClassName?: string;
};

const DrawerInternalLink = ({ to, icon, title, className }: LinkProps) => (
  <Link href={to} passHref>
    <a className={""}>
      <ListItem
        className={`${className} flex hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-100`}>
        <ListIcon as={icon} className={"text-3xl "} />
        <Text className={"text-2xl mx-2"}>{title}</Text>
      </ListItem>
    </a>
  </Link>
);

// const DrawerExternalLink = ({ to, icon, title, className }: LinkProps) => (
//   <ExternalLink to={to}>
//     <ListItem className={className}>
//       <ListIcon as={icon} />
//       {title}
//     </ListItem>
//   </ExternalLink>
// );

interface SiteLayoutProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * React component that is used to complete the following tasks:
 * 1) Provide and Control the Navigation Menu
 * 2) Handle Page Meta for SEO
 * 3) Give a structure for easy page creation
 * @param {SiteLayoutProps} props
 * @returns {JSX.Element} layoutComponent
 */
const SiteLayout = (props: SiteLayoutProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const username: string = store.user;
  const user: User = users[username];

  return (
    <div>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent
            className={
              "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            }>
            <DrawerHeader>
              <Box
                display={"flex"}
                justifyItems={"center"}
                borderBottom={"2px"}
                pb={1}
                className={"text-black dark:text-white"}>
                <Text>nuzlocker.app</Text>
                <CloseButton
                  onClick={onClose}
                  className={"absolute top-4 right-4 z-50"}
                />
              </Box>
              <div className={"flex pt-1"}>
                <Link href={`/${username}`} passHref>
                  <a>
                    <Image
                      src={user.profilePic}
                      fallbackSrc={"https://via.placeholder.com/150"}
                      rounded={"full"}
                      border={"4px"}
                      borderColor={user.colorTheme}
                      className={"w-20 cursor-pointer"}
                    />
                  </a>
                </Link>
                <div
                  className={
                    "mx-4 flex-auto justify-center items-center truncate overflow-ellipsis text-black dark:text-white"
                  }>
                  <Text className={"text-lg"}>{user.name}</Text>
                  <Text className={"text-base"}>@{user.username}</Text>
                  {/* <Text className={"text-sm"}>Data</Text> */}
                </div>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <List className={"text-2xl"}>
                <DrawerInternalLink
                  to={"/"}
                  icon={MdHome}
                  title={"Home"}
                  className={"mb-2 text-gray-800 dark:text-gray-100"}
                />
                <DrawerInternalLink
                  to={"/explore"}
                  icon={MdExplore}
                  title={"Explore"}
                  className={"my-2 text-gray-800 dark:text-gray-100"}
                />
                <DrawerInternalLink
                  to={"/resources"}
                  icon={MdCollectionsBookmark}
                  title={"Resources"}
                  className={"my-2 text-gray-800 dark:text-gray-100"}
                />
                <DrawerInternalLink
                  to={"/settings"}
                  icon={MdSettings}
                  title={"Settings"}
                  className={"my-2 text-gray-800 dark:text-gray-100"}
                />
              </List>
            </DrawerBody>
            <DrawerFooter className={"center justify-center"}>
              <Text className={"text-black dark:text-white"}>
                This app is still in development.
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box
        className={"bg-gray-200 dark:bg-gray-800 text-black dark:text-white"}>
        <Box
          id={"main-screen-content"}
          className={"max-w-screen-2xl m-auto relative"}>
          <Box id={"menu-button"} className={"absolute top-5 right-5 z-50"}>
            <IconButton
              icon={<MdMenu />}
              aria-label={"Open Menu"}
              onClick={onOpen}
              ref={btnRef}
              bg={user.colorTheme}
              color={"white"}
              // _hover={{ bg: "yellow.400", color: "black" }}
              // _active={{ bg: "yellow.500" }}
              // className={
              //   "bg-gray-800 dark:bg-gray-100 text-gray-800 dark:text-gray-800"
              // }
            />
          </Box>
          <Box className={"bg-yellow-main min-h-screen"}>{props.children}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default SiteLayout;
