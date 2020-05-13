import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import HomeScreen from '../screens/home/home';
import ReportScreen from '../screens/report/report';
import VitalScreen from '../screens/vitals/vitals';
import SettingsScreen from '../screens/settings/settings';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontFamily: 'AirbnbCereal-Bold',
          letterSpacing: -0.2,
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={28} color={focused ? 'black' : 'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="send"
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vitals"
        component={VitalScreen}
        options={{
          tabBarLabel: 'Vitals',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-pulse"
              size={28}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={28}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;