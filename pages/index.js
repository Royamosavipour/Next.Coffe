import React from "react";
import Slider from '@/components/Templates/Index/Slider'
import About from "@/components/Templates/Index/About";
import Servises from "@/components/Templates/Index/Servises";
import Offer from "@/components/Templates/Index/Offer";
import Menu from "@/components/Templates/Index/Menu";
import Reservaition from "@/components/Templates/Index/Reservaition";
import Testimonial from "@/components/Templates/Index/Testimonials";
export default function Index({ data }) {
  return (
    <>

      <Slider/>
      <About />
      <Servises services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservaition />
      <Testimonial comments={data.comment} />
    </>
  );
}

export async function getStaticProps() {
  const servicesRespons = await fetch(`http://localhost:4000/services`);
  const servicesData = await servicesRespons.json();

  const menuRespons = await fetch(`http://localhost:4000/menu`);
  const menuData = await menuRespons.json();

  const commentRespons = await fetch(`http://localhost:4000/comments`);
  const commentData = await commentRespons.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comment: commentData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
