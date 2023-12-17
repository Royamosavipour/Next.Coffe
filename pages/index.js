import React from "react";
import Slider from "../components/Templates/Index/Slider";
import About from "@/components/Templates/Index/About";
import Servises from "@/components/Templates/Index/Servises";
import Offer from "@/components/Templates/Index/Offer";

export default function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Servises services={data.services} />
      <Offer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/services`);
  const services = await res.json();

  return {
    props: { data: { services } },
    revalidate: 60 * 60 * 12,
  };
}
