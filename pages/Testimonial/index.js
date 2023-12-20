import React from "react";
import PageHeader from "@/components/Modules/PageHeader/PageHeader";
import Comments from "@/components/Templates/testmonial/Comments";

export default function Testimonial({comments}) {
  return (
    <>
      <PageHeader route={"testimonial"} />
      <Comments data={comments}/>

    </>
  );
}




export async function getStaticProps() {
  
  const res = await fetch(`http://localhost:4000/comments`);
  const comments = await res.json();

  return {
    props: {
      comments
    },
    revalidate: 60 * 60 * 12,
  };
}
