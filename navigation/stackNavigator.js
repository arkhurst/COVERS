import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTabs';


const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
               name="Tabs" 
               component={BottomTab} 
                options={{
                   headerShown:false
                }}   
            />
        </Stack.Navigator>
    );
};