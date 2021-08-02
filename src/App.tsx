/** @format */

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AutenticacionContext from "./auth/AutenticacionContext";
import { claim } from "./auth/auth.model";
import rutas from "./route-config";
import Menu from "./utils/Menu";
import configurarValidaciones from "./validaciones";
configurarValidaciones();

function App() {
  const [claims, setClaims] = useState<claim[]>([
    { nombre: "email", valor: "kleberguerra22@hotmail.com" },
    // { nombre: "role", valor: "admin" },
  ]);
  function actualizar(claims: claim[]) {
    setClaims(claims);
  }
  function esAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.nombre === "role" && claim.valor === "admin"
      ) > -1
    );
  }
  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{ claims, actualizar }}>
          <Menu />
          <div className="container">
            <Switch>
              {rutas.map((ruta) => (
                <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
                  {ruta.esAdmin && !esAdmin() ? (
                    <>No tiene permiso para acceder a este componente</>
                  ) : (
                    <ruta.componente />
                  )}
                </Route>
              ))}
            </Switch>
          </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
