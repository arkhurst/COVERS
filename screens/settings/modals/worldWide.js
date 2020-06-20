import React from 'react';
import { View, Text, Button, StyleSheet, Modal, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WorldWideStats from '../../../components/settings/worldStats';
import DropdownComponent from '../../../components/settings/dropDown';
import font_sizes from '../../../constants/font_sizes';

export default function WorldWide({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
                <View style={{paddingHorizontal:20,borderBottomWidth:StyleSheet.hairlineWidth, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={styles.headerTitle}>{'COVID-19\nWorldwide'}</Text>
                  <TouchableOpacity style={{paddingTop:20}} onPress={() => close(4)}>
                     <Ionicons name="ios-close" size={40} />
                  </TouchableOpacity>
                </View>
                <WorldWideStats />
                <View style={{paddingHorizontal:20}}>
                    <Text style={{ fontWeight: '600' }}>Select Country:</Text>
                </View>
                <DropdownComponent />
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight
    },
    headerTitle: {
        fontSize: font_sizes.h1,
        fontWeight: 'bold',
        paddingVertical:20
      },
})