import { GetServerSideProps } from "next";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import SiteLayout from "../components/SiteLayout";
import users from "../data/users.json";
import { User } from "../utils/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username: string = context.params.profile as string;
  const user: ProfilePageProps = users[username];
  return {
    props: {
      user: user,
    },
  };
};

interface ProfilePageProps {
  user: User;
}

export default function ProfilePage(props: ProfilePageProps) {
  const { user } = props;
  return (
    <SiteLayout>
      <ProfileHeader user={user} />
      <main>{/* <p>This is the page for {user.username}</p> */}</main>
    </SiteLayout>
  );
}
