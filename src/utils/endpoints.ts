/** @format */
console.log("valor por defecto", process.env.REACT_APP_API_URL);
const apiURL = process.env.REACT_APP_API_URL;
export const urlGeneros = `${apiURL}/generos`;
export const urlActores = `${apiURL}/actores`;
export const urlCines = `${apiURL}/cines`;
export const urlPeliculas = `${apiURL}/peliculas`;
export const urlCuentas = `${apiURL}/cuentas`;
export const urlRatings = `${apiURL}/rating`;
