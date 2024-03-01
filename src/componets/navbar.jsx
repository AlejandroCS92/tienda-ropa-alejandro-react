import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

// import { counter } from "./product";
// import Product from "./componets/product.jsx";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const {state} = useCart();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // Redirect to the search results page with the query parameter
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Tienda de Ropa
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/products/category/men's clothing"
                    >
                      Hombre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/products/category/women's clothing"
                    >
                      Mujer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/products/category/jewelery"
                    >
                      Joyería
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/products/category/electronics"
                    >
                      Electrónica
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-light"
                type="button"
                onClick={handleSearch}
              >
                Buscar
                <i className="fa fa-search" alt="" />
              </button>
            </form>

            {/* Botón de Carrito de Compras */}
            <NavLink
              className="btn btn-outline-dark ms-2 d-flex h-100"
              type="submit"
              to = "/cart"
            >
              <i className="bi bi-cart"></i>
              Cart({state.cartCount})
            </NavLink>

            <button
              className="btn btn-light mx-2"
              style={{ backgroundColor: "$gray-400" }}
            >
              Registrarse
            </button>
            <button
              className="btn btn-light mx-2"
              style={{ backgroundColor: "white" }}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
