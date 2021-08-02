/** @format */

import { NavLink } from "react-router-dom";
import Autorizado from "../auth/Autorizado";

export default function Menu() {
  const claseActiva = "active";
  return (
    <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
      <div className="container-fluid">
        <NavLink className="navbar-brand" activeClassName={claseActiva} to="/">
          React Películas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName={claseActiva}
                to="/peliculas/filtrar"
              >
                Filtrar Películas
              </NavLink>
            </li>
            <Autorizado
              role="admin"
              autorizado={
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName={claseActiva}
                      to="/generos"
                    >
                      Géneros
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName={claseActiva}
                      to="/actores"
                    >
                      Actores
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName={claseActiva}
                      to="/cines"
                    >
                      Cines
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName={claseActiva}
                      to="/peliculas/crear"
                    >
                      Crear Películas
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
