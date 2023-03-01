/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookOpen, List} from 'react-native-feather';
import Home from '../views/Home/Home';
import Review from '../views/Review/Review';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'dimgray',
        tabBarStyle: {
          height: '10%',
        },
      }}>
      {Platform.OS === 'ios' ? (
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
              marginTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              marginTop: 5,
            },
          }}
          name="Ma liste"
          component={Home}
        />
      ) : (
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
              marginBottom: 16,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              position: 'absolute',
              top: '60%',
            },
          }}
          name="Ma liste"
          component={Home}
        />
      )}
      {Platform.OS === 'ios' ? (
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
              marginTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              marginTop: 5,
            },
          }}
          name="Réviser"
          component={Review}
        />
      ) : (
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
              marginBottom: 16,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              position: 'absolute',
              top: '60%',
            },
          }}
          name="Réviser"
          component={Review}
        />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
