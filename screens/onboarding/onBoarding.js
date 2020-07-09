import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { width } from '../../constants/constants';
import { GlobalContext } from '../../context/GlobalState';
import { useMutation } from '@apollo/react-hooks';
import { showMessage } from 'react-native-flash-message';
import { LogInUser as LOGIN } from '../../graphql/mutations/mutations';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

export default function Onboarding({ navigation }) {
  const { addPhoneNumber } = useContext(GlobalContext);
  const [phone, setphoneNumber] = useState('');
  const [loginMember, { loading }] = useMutation(LOGIN, {
    variables: {
      phone,
    },
    onCompleted: () => {
      addPhoneNumber(phone);
      navigation.navigate('Verification');
    },
    onError: ({ graphQLErrors, networkError }) => {
      console.log('Error occured', graphQLErrors, networkError);
      showMessage({
        type: 'warning',
        message: 'Oops, error occured. ',
        description:
          "Don't fret, please check your internet connection and try again",
      });
    },
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <ImageBackground
        source={require('../../assets/COVERS.jpg')}
        style={styles.imageBackground}>
        <KeyboardAvoidingView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          behavior="padding">
          <Text style={styles.headerText}>COVERS</Text>
          <Text style={styles.mainText}>
            (COVID-19 EMERGENCY RESPONSE SOLUTION)
          </Text>
          <Text style={styles.minorText}>
            {
              'Join the effort by well meaning Africans using technology to slow down and eventually halt the spread of COVID-19'
            }
          </Text>
          <View style={{ paddingTop: 40, flexDirection: 'row' }}>
            <TextInput
              value={phone}
              onChangeText={(phone) => {
                setphoneNumber(phone);
              }}
              keyboardType="number-pad"
              style={styles.textInput}
            />
            <Text style={styles.phone}>Phone number</Text>
          </View>
          {phone.length < 10 || Number(phone.charAt(0)) !== 0 ? (
            <View style={styles.initialButtonState}>
              <Text style={styles.minorText}>Get Started</Text>
            </View>
          ) : (
            <TouchableOpacity onPressIn={loginMember} style={styles.button}>
              {loading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <Text style={styles.minorText}>Get Started</Text>
              )}
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 55,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
    color: colors.white,
  },
  mainText: {
    fontSize: font_sizes.t3,
    fontWeight: 'bold',
    color: colors.white,
  },
  minorText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 5,
  },
  textInput: {
    height: 53,
    width: width * 0.8,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  phone: {
    position: 'absolute',
    top: 65,
    left: width * 0.52,
    fontWeight: '500',
  },
  initialButtonState: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: width * 0.8,
    backgroundColor: '#9f9f99',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: width * 0.8,
    backgroundColor: '#4cbd7a',
  },
});
