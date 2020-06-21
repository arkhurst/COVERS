// import React, { Fragment } from 'react';
// import { View , Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Onboarding from '../screens/onboarding/onBoarding';
// import Verification from '../screens/verification/verification';
// import General from '../screens/general/general';
// import font_sizes from '../constants/font_sizes';

// const AuthStack = createStackNavigator();

// export default function AuthNavigator(){
//     return(
//         <Fragment>
//             <AuthStack.Navigator>
//                 <AuthStack.Screen 
//                   name="Onboarding"
//                   component={Onboarding}
//                   options={{
//                     headerShown:false
//                   }}
//                 />
//                 <AuthStack.Screen 
//                   name="Verification"
//                   component={Verification}
//                   options={{
//                     headerShown:false
//                   }}
//                 />
//                 <AuthStack.Screen
//                    name="General"
//                    component={General}
//                    options={{
//                     headerStyle:{
//                       height:100
//                     },
//                      headerLeft: () => (
//                       <Text style={{paddingHorizontal:20, fontFamily: 'AirbnbCereal-Bold', letterSpacing: -0.5,fontSize:font_sizes.h2, }}>
//                         General Information
//                       </Text>  
//                   ),
//                   headerTitle:false
//                   }}
//                 />
//             </AuthStack.Navigator>
//         </Fragment>
//     )
// }