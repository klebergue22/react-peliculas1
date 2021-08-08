/** @format */

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/Peliculas.model";
import AlertaContext from "./utils/AlertaContext";
import { urlPeliculas } from "./utils/endpoints";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    cargarDatos();
  }, []);
  function cargarDatos() {
    axios.get(urlPeliculas).then((repuesta: AxiosResponse<landingPageDTO>) => {
      setPeliculas(repuesta.data);
    });
  }
  return (
    <>
      <AlertaContext.Provider value={() => cargarDatos()}>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCines} />

        <h3>Próximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </AlertaContext.Provider>
    </>
  );
}
function setPeliculas(data: landingPageDTO) {
  throw new Error("Function not implemented.");
}
