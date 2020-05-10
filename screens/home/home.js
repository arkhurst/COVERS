import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Header>
                
            </Header>
            <Text>Hello from Home</Text>
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