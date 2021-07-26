/** @format */

import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      <h3>Editar Cine</h3>
      <FormularioCines
        modelo={{ nombre: 'Sambil',latitud:-0.1153665,longitud:-78.49056}}
        onSubmit={valores => console.log(valores)}
      />
    </>
  );
}
