/** @format */

import { actorPeliculaDTO } from "../actores/actores.model";
import { generoDTO } from "../generos/generos.model";
import PeliculaIndividual from "./PeliculaIndividal";

export interface peliculaDTO {
  id: number;
  titulo: string;
  poster: string;
  enCines: boolean;
  trailer: string;
  resumen?: string;
  fechaLanzamiento: Date;
  cines: cineDTO[];
  generos: generoDTO[];
  actores: actorPeliculaDTO[];
}
export interface peliculaCreacionDTO {
  titulo: string;
  enCines: boolean;
  trailer: string;
  resumen?: string;
  fechaLanzamiento?: Date;
  poster?: File;
  posterURL?: string;
  generosIds?: number[];
  cinesIds?: number[];
  actores?: actorPeliculaDTO[];
}

export interface landingPageDTO {
  enCartelera?: peliculaDTO[];
  proximosEstrenos?: peliculaDTO[];
}
export interface peliculasPostGetDTO {
  generos: generoDTO[];
  cines: cineDTO[];
}
