import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import Pricing from "@/components/Templates/Menu/Pricing";

export default function Menu({ menu }) {
  return (
    <>
      <PageHeader route={"menu"} />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps() {
  const responseMenu = await fetch(`http://localhost:4000/menu`);
  const data = await responseMenu.json();

  return {
    props: { menu: data },
    revalidation: 60 * 60 * 12,
  };
}
