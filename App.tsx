import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from '~navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from '~store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
