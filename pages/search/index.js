import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import Result from "@/components/Templates/Result/Result";

export default function Search() {
  return (
    <>
      <PageHeader route={"search"} />
      <Result />
    </>
  );
}
