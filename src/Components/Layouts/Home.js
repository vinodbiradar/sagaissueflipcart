import React from "react";
import Add from "../Adds/Add";
import Product from "../Products/Product";
import ProductList from "../Products/ProductList";

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
