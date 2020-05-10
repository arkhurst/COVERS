import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Hello from Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    }
})