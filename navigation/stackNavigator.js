import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTabs';
import Onboarding from '../screens/onboarding/onBoarding';
import Verification from '../screens/verification/verification';
import General from '../screens/general/general';
import { View , Text } from 'react-native';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tabs" >
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
        name="General"
        component={General}
        options={{
          headerStyle:{
            height:100
          },
           headerLeft: () => (
            <Text style={{paddingHorizontal:20, fontFamily: 'AirbnbCereal-Bold', letterSpacing: -0.5,fontSize:30, }}>
              General Information
            </Text>  
        ),
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
