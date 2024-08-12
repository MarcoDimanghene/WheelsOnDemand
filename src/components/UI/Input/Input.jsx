import { Field, ErrorMessage } from 'formik';

import {
  ErrorMessageStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from './InputStyled';

const LoginInput = ({ children, name, htmlFor, type, id, placeholder, readOnly }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputBoxStyled>
          <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>
          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
            readOnly={readOnly}
          />
          <ErrorMessage name={field.name}>
            {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputBoxStyled>
      )}
    </Field>
  );
};

export default LoginInput;
