import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { User } from "../utils/types";

type ProfileHeaderProps = { user: User };
export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <header className={"text-center"}>
      <Box backgroundColor={user.colorTheme} pos={"relative"}>
        <Image
          src={user.bannerPic}
          border={"8px"}
          borderColor={user.colorTheme}
          borderTopRadius={"full"}
          backgroundColor={user.colorTheme}
          w={"full"}
          maxH={"520px"}
        />
        <div className={"mx-auto w-full absolute -bottom-12 sm:-bottom-24"}>
          <Image
            src={user.profilePic}
            fallbackSrc={"https://via.placeholder.com/150"}
            rounded={"full"}
            m={"auto"}
            border={"8px"}
            borderColor={user.colorTheme}
            className={"w-28 sm:w-48"}
          />
        </div>
      </Box>
      <div className={"pt-12 sm:pt-24 pb-4"}>
        <div>
          <h1 className={"text-xl sm:text-3xl"}>{user.name}</h1>
          <h1 className={"text-xl sm:text-3xl"}>@{user.username}</h1>
        </div>
      </div>
    </header>
  );
}
