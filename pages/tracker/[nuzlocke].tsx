import { GetServerSideProps } from "next";
import React from "react";
import SiteLayout from "../../components/SiteLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const nuzlocke: string = context.params.nuzlocke as string;

  return {
    props: {
      nuzlocke,
    },
  };
};

export default function NuzlockeProgress(props) {
  const { nuzlocke } = props;
  return (
    <SiteLayout>
      <main>Nuzlocke: {nuzlocke}</main>
    </SiteLayout>
  );
}
