/** @format */

import { Form, Formik, FormikHelpers } from "formik";

import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { credencialesUsuario } from "./auth.model";

export default function FormularioAuth(props: formularioAuthProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Este campo es requerido")
          .email("Debe colocar un email valido"),
        password: Yup.string().required("Este campo es requerido"),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="email" label="Email" />
          <FormGroupText campo="password" label="Password" type="password" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Enviar
          </Button>
          <Link className="btn btn-secondary" to="/">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}
interface formularioAuthProps {
  modelo: credencialesUsuario;
  onSubmit(
    valores: credencialesUsuario,
    acciones: FormikHelpers<credencialesUsuario>
  ): void;
}
