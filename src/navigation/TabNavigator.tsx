/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookOpen, List} from 'react-native-feather';
import Home from '../views/Home/Home';
import Review from '../views/Review/Review';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'dimgray',
        tabBarStyle: {
          height: 90,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: props => {
            const focus = props.focused;
            if (focus) {
              return <List color={'dodgerblue'} width={20} height={20} />;
            }
            return <List color={'dimgray'} width={20} height={20} />;
          },
          tabBarIconStyle: {
            marginBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
            position: 'absolute',
            top: '65%',
          },
        }}
        name="Ma liste"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: props => {
            const focus = props.focused;
            if (focus) {
              return <BookOpen color={'dodgerblue'} width={20} height={20} />;
            }
            return <BookOpen color={'dimgray'} width={20} height={20} />;
          },
          tabBarIconStyle: {
            marginBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
            position: 'absolute',
            top: '65%',
          },
        }}
        name="Réviser"
        component={Review}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
