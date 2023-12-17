import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/Templates/Services/ServicesDetails";

export default function Services({ services }) {
  return (
    <>
      <PageHeader route="services" />
      <ServicesDetails services={services} />
    </>
  );
}

export async function getStaticProps() {
  const responseServices = await fetch(`http://localhost:4000/services`);
  const data = await responseServices.json();

  return {
    props: {services:data },
  };
}
