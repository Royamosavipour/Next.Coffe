import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import Pricing from "@/components/Templates/Menu/Pricing";

 function Menu({ menu }) {
  return (
    <>
      <PageHeader route={"menu"} />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  return {
    props: {
      menu: data,
    },
    revalidate: 60 * 60 * 12, // 43200 Second
  };
}


export default Menu;