import React, { useState, useEffect } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(undefined);

  async function getProducts () {
      const res = await fetch(`https://fakestoreapi.com/products/`);
      const data = await res.json();
      setProducts(data);
      console.log(data);
  }

// getProducts();


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container text-center m-5">
        <h1>
          productos
        </h1>
      </div>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {
          products !=null?
            products.map((product) => (
              <div key={product.id} className="card-container card m-3 p-1 text-center col-2">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                    <h4 className="card-text">${product.price}USD</h4>
                      <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                        Comprar Ahora
                      </NavLink>
                </div>
              </div>
            ))
            : <h1>Loading...</h1>
        }
      </div>
    </>
  );

};

export default Products;