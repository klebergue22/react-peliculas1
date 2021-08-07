/** @format */

import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPelicula";
import EditarPeliculas from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import DetallePelicula from "./peliculas/DetallePelicula";
import RedireccionarALanding from "./utils/RedireccionarALanding";
import Registro from "./auth/Registro";
import Login from "./auth/Login";

const rutas = [
  { path: "/generos/crear", componente: CrearGenero, esAdmin: true },
  {
    path: "/generos/editar/:id(\\d+)",
    componente: EditarGenero,
    esAdmin: true,
  },
  { path: "/generos", componente: IndiceGeneros, exact: true, esAdmin: true },

  { path: "/actores/crear", componente: CrearActores, esAdmin: true },
  {
    path: "/actores/editar/:id(\\d+)",
    componente: EditarActores,
    esAdmin: true,
  },
  { path: "/actores", componente: IndiceActores, exact: true, esAdmin: true },

  { path: "/cines/crear", componente: CrearCines, esAdmin: true },
  { path: "/cines/editar/:id(\\d+)", componente: EditarCines, esAdmin: true },
  { path: "/cines", componente: IndiceCines, exact: true, esAdmin: true },

  { path: "/pelicula/:id(\\d+)", componente: DetallePelicula },
  { path: "/peliculas/crear", componente: CrearPeliculas, esAdmin: true },
  {
    path: "/peliculas/editar/:id(\\d+)",
    componente: EditarPeliculas,
    esAdmin: true,
  },
  { path: "/peliculas/filtrar", componente: FiltroPeliculas },

  { path: "/registro", componente: Registro },
  { path: "/login", componente: Login },

  { path: "/", componente: LandingPage, exact: true },
  { path: "*", componente: RedireccionarALanding },
];

export default rutas;
