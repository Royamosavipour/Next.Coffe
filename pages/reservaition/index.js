import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import ReservaitionDetails from "@/components/Templates/Reservaition/ReservaitionDetails";

export default function Reservaition() {
  return (
    <>
      <PageHeader route={"reservaition"} />
      <ReservaitionDetails/> 
    </>
  );
}
