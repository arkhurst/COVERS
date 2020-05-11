import React, { useState } from 'react';
import { Platform, StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import StackNavigator from './navigation/stackNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourceAsync(){
    await Promise.all([
      Font.loadAsync({
        // fonts used
        'GoogleSans-Bold': require('./assets/fonts/GoogleSans-Bold.ttf'),
        'GoogleSans-Medium': require('./assets/fonts/GoogleSans-Medium.ttf'),
        'GoogleSans-Regular': require('./assets/fonts/GoogleSans-Regular.ttf'),
        'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
        'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCereal-Medium.ttf'),
        'AirbnbCereal-Book': require('./assets/fonts/AirbnbCereal-Book.ttf'),
      })
    ])
  }

  function handleLoadingError(error){
    // show error
    console.log(error)
  }

  function handleFinishLoading(setLoadingComplete){
    setLoadingComplete(true)
  }

  if(!isLoadingComplete && !props.skipLoadingScreen){
    return(
      <AppLoading 
        startAsync={loadResourceAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  }else{
    return(
      <NavigationContainer>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}   
         <StackNavigator />
      </NavigationContainer>
    )
  }

}

