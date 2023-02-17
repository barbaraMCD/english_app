/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Inbox as Box} from 'react-native-feather';
import Home from '../views/Home/Home';

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
              return <Box color={'dodgerblue'} width={20} height={20} />;
            }
            return <Box color={'dimgray'} width={20} height={20} />;
          },
          tabBarIconStyle: {
            marginTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
        }}
        name="Home"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
