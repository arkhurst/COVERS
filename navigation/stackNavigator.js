import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTabs';
import Onboarding from '../screens/onboarding/onBoarding';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
         name="Onboarding"
         component={Onboarding}
         options={{
           headerShown:false
         }}
      />
      <Stack.Screen
        name="Tabs"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
