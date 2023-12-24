import React from "react";
import ProductsDetails from "@/components/Templates/Products/ProductDetails";
import Comments from "@/components/Templates/Products/Comments";

const Product = ({ product, productComments }) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={productComments} />
    </>
  );
};

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
  const productRes = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await productRes.json();

  const commentRes = await fetch(`http://localhost:4000/comments`);
  const comments = await commentRes.json();

  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product,
      productComments,
    },
  };
}

export default Product;
