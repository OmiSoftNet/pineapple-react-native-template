import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '~screens/Auth/Login';
import Registration from '~screens/Auth/Registration';
import {AuthRoutes} from '~navigation/routes';

const Stack = createNativeStackNavigator();

const Auth: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AuthRoutes.Login} component={Login} />
      <Stack.Screen name={AuthRoutes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export default Auth;
