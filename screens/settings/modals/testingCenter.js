import React from 'react';
import { View, Text, StyleSheet, Modal} from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function TestinCenters({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Testing Centers</Text>
                    <TouchableOpacity onPress={() => close(3)}>
                        <Ionicons  name="ios-close" size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight,
      paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      headerTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
        fontSize: 32,
      },
})