import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AuthRoutes} from './routes';
import {selectIsAuthenticated} from '~store/auth/auth.selectors';
import Auth from '~navigation/navigators/Auth';
import {useFlipper} from '@react-navigation/devtools';
import {useAppSelector} from '~hooks/store/useAppSelector';
import SplashScreen from 'react-native-splash-screen';
import {NavigationTheme} from '~config/theme';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useFlipper(navigationRef);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <>{/* Authenticated screens flow */}</>
        ) : (
          <Stack.Screen name={AuthRoutes.Root} component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
