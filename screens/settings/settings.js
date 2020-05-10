import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';


export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Header>
                <Text>Settings</Text>
            </Header>
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