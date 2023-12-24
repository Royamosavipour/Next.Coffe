import React from "react";
import ProductsDetails from "@/components/Templates/Products/ProductDetails";
import Comments from "@/components/Templates/Products/Comments";

const Product=({product}) =>{
  return (
    <>
      <ProductsDetails data={product} />
      <Comments />
    </>
  );
}

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();

  return {
    props: {product},
  };
}



export default Product
