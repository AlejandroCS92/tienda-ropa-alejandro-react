import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

const Product = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    getProduct();
  }, [id]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product.id });
  };

  const showProduct = () => {
    if (!product) {
      return null; // Return null or a loading indicator while the product is loading
    }

    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {" "}
            clasificación {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}USD</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{showProduct()}</div>
      </div>
    </div>
  );
};

export default Product;
