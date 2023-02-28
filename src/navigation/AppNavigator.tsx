import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home/Home';
import TabNavigator from './TabNavigator';
import Review from '../views/Review/Review';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'TabNav'} component={TabNavigator} />
      <Stack.Screen name={'Ma Liste'} component={Home} />
      <Stack.Screen name={'Réviser'} component={Review} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
