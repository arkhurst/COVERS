import React, { useState } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import * as Font from 'expo-font';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { GlobalProvider } from './context/GlobalState';
import StackNavigator from './navigation/stackNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const client = new ApolloClient({
    uri: 'https://covid19-graphql.netlify.app/',
  });

  async function loadResourceAsync() {
    await Promise.all([
   
      Font.loadAsync({
        // fonts used
        'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
        'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCereal-Medium.ttf'),
        'AirbnbCereal-Book': require('./assets/fonts/AirbnbCereal-Book.ttf'),
      }),
    ]);
  }

  function handleLoadingError(error) {
    // show error
    console.log(error);
  }

  function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourceAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <GlobalProvider>
          <NavigationContainer>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <StackNavigator />
          </NavigationContainer>
        </GlobalProvider>
      </ApolloProvider>
    );
  }
}