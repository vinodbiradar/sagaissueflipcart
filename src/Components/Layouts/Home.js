import React from "react";
import Add from "../adds";
import Product from "../products/Product";
import ProductList from "../products/ProductList";

function Home() {
  return (
    <div>
      <Add />
      <Product />
      <ProductList />
    </div>
  );
}

export default Home;
