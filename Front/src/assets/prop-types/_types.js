import { shape, string, number, bool, oneOf, arrayOf, func } from 'prop-types';

export const user = shape({
  id: string,
  name: string,
  lastName: string,
  age: number,
  role: oneOf(['admin', 'user']),
  studyDate: string,
  emailConfirmed: bool,
  token: string
});

export const singInData = shape({
  email: string.isRequired,
  password: string.isRequired
});

export const signUpData = shape({
  email: string.isRequired,
  name: string.isRequired,
  lastName: string.isRequired,
  password: string.isRequired,
  repeat: string.isRequired,
  age: string.isRequired
});

export const userList = arrayOf(user);

export const column = shape({
  title: string,
  key: string,
  dataIndex: string
});
export const columns = arrayOf(column);

export const field = shape({
  name: string,
  value: string,
  placeholder: string,
  type: string,
  setValue: func,
  error: string
});
export const fields = arrayOf(field);