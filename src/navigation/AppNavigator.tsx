import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../views/Home/Home';
import TabNavigator from './TabNavigator';
import Review from '../views/Review/Review';
import ReviewInProgress from '../views/ReviewInProgress/ReviewInProgress';

type StackParamList = {
  TabNav: undefined;
  MaListe: undefined;
  Réviser: undefined;
  ReviewInProgress: {reviewToUse: string};
};

// for route.params
export type Props = NativeStackScreenProps<StackParamList, 'ReviewInProgress'>;
// for useNavigation()
export type ReviserProp = NativeStackNavigationProp<StackParamList, 'Réviser'>;

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'TabNav'} component={TabNavigator} />
      <Stack.Screen name={'MaListe'} component={Home} />
      <Stack.Screen name={'Réviser'} component={Review} />
      <Stack.Screen name={'ReviewInProgress'} component={ReviewInProgress} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
