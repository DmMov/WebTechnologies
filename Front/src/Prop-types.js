import { shape, string, number, bool, oneOf, arrayOf } from 'prop-types';

export const user_type = shape({
   id: string,
   name: string,
   lastName: string,
   age: number,
   role: oneOf(['admin', 'user']),
   studyDate: string,
   emailConfirmed: bool,
   token: string
});

export const sign_in_data_type = shape({
   email: string.isRequired,
   password: string.isRequired
});

export const sign_up_data_type = shape({
   email: string.isRequired,
   name: string.isRequired,
   lastName: string.isRequired,
   password: string.isRequired,
   repeat: string.isRequired,
   age: string.isRequired
});

export const user_list_type = arrayOf(user_type);

export const columns_type = arrayOf(
   shape({
      title: string,
      key: string,
      dataIndex: string
   })
);