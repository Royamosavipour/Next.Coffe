import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";

export default function Menu({menu}) {
  return (
    <>
      <PageHeader route={"menu"} />
      
    </>
  );
}


export async function getStaticProps() {
  const responseMenu = await fetch(`http://localhost:4000/menu`);
  const data = await responseMenu.json();

  return {
    props: {menu:data },
  };
}
