import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
// import Search from './Search';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const {category} = useParams();

    async function getCategories (cat) {
        const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
        const data = await res.json();
        setCategories(data);
    }

    // getCategories();

    useEffect(() => {
        getCategories(category);
      }, [category]);

      const handleSearch = async (query) => {
        const res = await fetch(`https://fakestoreapi.com/products?title=${query}`);
        const data = await res.json();
        setCategories(data);
      };

  return (
    <>
      <div className="container text-center m-5">
        <h1>
          {category.toUpperCase()} 
          {/* Categorias */}
        </h1>
      </div>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {
        //   categories !=null?
            categories.map((category) => (
              <div key={category.id} className="card-container card m-3 p-1 text-center col-2">
                <img src={category.image} className="card-img-top" alt={category.title} />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                    <h4 className="card-text">${category.price}USD</h4>
                      <NavLink to={`/products/${category.id}`} className="btn btn-outline-dark">
                        Comprar Ahora
                      </NavLink>
                </div>
              </div>
            ))
            // : <h1>Loading...</h1>
        }
      </div>
    </>
  )
}

export default Categories;