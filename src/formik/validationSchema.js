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
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Correo electrónico no válido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo requerido'),
});

export const contacValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
});
export const verifyValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Correo electrónico no válido')
    .required('Campo requerido'),
  verified: Yup.string()
    .required('Campo requerido'),
});


export const sendCodeValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'), 
});

export const changePassValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'), 
    resetCode: Yup.string()
    .required('Campo Requerido'),
    password: Yup.string().required("Requerido"),
    newpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});
