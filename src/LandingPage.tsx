/** @format */

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/Peliculas.model";
import { urlPeliculas } from "./utils/endpoints";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    axios.get(urlPeliculas).then((repuesta: AxiosResponse<landingPageDTO>) => {
      setPeliculas(repuesta.data);
    });
  }, []);
  return (
    <>
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={peliculas.enCines} />

      <h3>Próximos estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
}
