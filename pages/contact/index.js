import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import Contactdetail from '@/components/Templates/Contact/Contactdetail'

export default function Contact() {
  return (
    <>
      <PageHeader route={"contact"} />
      <Contactdetail/>
    </>
  );
}
