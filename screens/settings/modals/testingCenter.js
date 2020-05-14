import React from 'react';
import { View, Text, Button, StyleSheet, Modal} from 'react-native';
import Constants from 'expo-constants';


export default function TestinCenters({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
            <Button title="close" onPress={() => close(3)} />
            <Text>Testing Center</Text>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight
    }
})