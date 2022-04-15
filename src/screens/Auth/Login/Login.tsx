import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';
import {
  initialValues,
  validationSchema,
  LogInFields,
  LogInValues,
} from './config';
import {useLoginMutation} from '~services/api/auth';
import {useAppDispatch} from '~hooks/store/useAppDispatch';
import {authenticateUser} from '~store/auth/auth.slice';
import Box from '~components/Box';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styles from './styles';

const {Email, Password} = LogInFields;

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation();

  const handleSubmit = async (values: LogInValues) => {
    await loginUser(values).unwrap();
    dispatch(authenticateUser());
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const emailError = formik.touched[Email] && formik.errors[Email];
  const passwordError = formik.touched[Password] && formik.errors[Password];

  const isSubmitDisabled = !formik.isValid;

  return (
    <GestureHandlerRootView style={styles.container}>
      <Box />
    </GestureHandlerRootView>
  );
};

export default Login;
