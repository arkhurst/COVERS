import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTabs';
import Onboarding from '../screens/onboarding/onBoarding';
import Verification from '../screens/verification/verification';
import General from '../screens/general/general';
import { View , Text } from 'react-native';
import NewsDetails from '../screens/news_details/newsDetails';
import font_sizes from '../constants/font_sizes';

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
        name="General"
        component={General}
        options={{
          headerStyle:{
            height:100
          },
           headerLeft: () => (
            <Text style={{paddingHorizontal:20, fontFamily: 'AirbnbCereal-Bold', letterSpacing: -0.5,fontSize:font_sizes.h2, }}>
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
      <Stack.Screen 
         name="News"
         component={NewsDetails}
         options={{
           headerShown:false
         }}
      />
    </Stack.Navigator>
  );
}
