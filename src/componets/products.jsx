import React, { useState, Fragment, useEffect } from "react";

const Products = () => {

    const [products, setProducts] = useState({}); 

  useEffect(() => {
    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=>console.log(json))
    }
    getProduct();
});

  const [numero, setNumero] = useState("Valor");

  return (
    <Fragment>
      <h1>Hola Mundo{numero}</h1>
    </Fragment>
  );
};

export default Products;
