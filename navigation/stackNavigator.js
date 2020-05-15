import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTabs';
import Onboarding from '../screens/onboarding/onBoarding';
import Verification from '../screens/verification/verification';

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
         name="Verification"
         component={Verification}
         options={{
           headerTitle:false
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
