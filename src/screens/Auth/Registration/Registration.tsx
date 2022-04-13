import React from 'react';
import {
  initialValues,
  validationSchema,
  RegistrationFields,
  RegistrationValues,
} from './config';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {useAppDispatch} from '~hooks/store/useAppDispatch';
import {useRegisterMutation} from '~services/api/auth';
import {authenticateUser} from '~store/auth/auth.slice';

const {Username, Email, Password} = RegistrationFields;

const Registration: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const [registerUser] = useRegisterMutation();

  const handleSubmit = async (values: RegistrationValues) => {
    await registerUser(values).unwrap();
    dispatch(authenticateUser());
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const usernameError = formik.touched[Username] && formik.errors[Username];
  const emailError = formik.touched[Email] && formik.errors[Email];
  const passwordError = formik.touched[Password] && formik.errors[Password];

  const isSubmitDisabled = !formik.isValid;

  return <View>{/* Registration flow */}</View>;
};

export default Registration;
