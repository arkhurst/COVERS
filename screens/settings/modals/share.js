import React from 'react';
import { View, Text, Button, StyleSheet, Modal} from 'react-native';
import Constants from 'expo-constants';


export default function Share({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
            <Button title="close" onPress={() => close(5)} />
            <Text>Share</Text>
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