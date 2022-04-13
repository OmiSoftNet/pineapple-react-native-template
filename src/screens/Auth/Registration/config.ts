import * as Yup from 'yup';

export enum RegistrationFields {
  Username = 'username',
  Email = 'email',
  Password = 'password',
}

export interface RegistrationValues {
  [RegistrationFields.Username]: string;
  [RegistrationFields.Email]: string;
  [RegistrationFields.Password]: string;
}

export const initialValues: RegistrationValues = {
  [RegistrationFields.Username]: '',
  [RegistrationFields.Email]: '',
  [RegistrationFields.Password]: '',
};

export const validationSchema = Yup.object().shape({
  [RegistrationFields.Username]: Yup.string().trim().required(),
  [RegistrationFields.Email]: Yup.string().email().trim().required(),
  [RegistrationFields.Password]: Yup.string().trim().required(),
});
