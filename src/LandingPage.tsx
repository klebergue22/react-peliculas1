/** @format */

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/Peliculas.model";
import { urlPeliculas } from "./utils/endpoints";
import AlertaContext from "./utils/AlertaContext";
import Autorizado from "./auth/Autorizado";

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
      <Autorizado
        autorizado={<>estas AUTORIZADO</>}
        noAutorizado={<>NO AUTORIZADO</>}
        role="admin"
      />
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
