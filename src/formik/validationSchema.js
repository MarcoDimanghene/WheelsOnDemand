import * as Yup from 'yup';
import { regEmail } from '../utils';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  cellphone: Yup.string().required('Campo Requerido'),
  location: Yup.string().required('Campo Requerido'),
  address: Yup.string().required('Campo Requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
  password: Yup.string()
    .min(8, 'Mínimo de caracteres: 8')
    .required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
  password: Yup.string()
    .min(8, 'Mínimo de caracteres: 8')
    .required('Campo Requerido'),
});

export const contacValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
});


