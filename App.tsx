import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
