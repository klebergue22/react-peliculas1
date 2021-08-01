/** @format */

import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadaDTO } from "./coordenadas.model";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps) {
  const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(
    props.coordenadas
  );
  return (
    <MapContainer
      center={[-0.117346, -78.48865]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="React Películas"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.soloLectura ? null : (
        <ClickMapa
          setPunto={(coordenadas) => {
            setCoordenadas([coordenadas]);
            props.manejarClickMapa(coordenadas);
          }}
        />
      )}

      {coordenadas.map((coordenada) => (
        <Marcador key={coordenada.lat + coordenada.lng} {...coordenada} />
      ))}
    </MapContainer>
  );
}

function ClickMapa(props: clickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}
interface clickMapaProps {
  setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
  return (
    <Marker position={[props.lat, props.lng]}>
      {props.nombre ? <Popup>{props.nombre}</Popup> : null}
    </Marker>
  );
}

interface mapaProps {
  height: string;
  coordenadas: coordenadaDTO[];
  manejarClickMapa(coordenadas: coordenadaDTO): void;
  soloLectura: boolean;
}
Mapa.defaultProps = {
  height: "500px",
  soloLectura: false,
  manejarClickMapa: () => {},
};
