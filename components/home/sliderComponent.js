import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function({image, number, status}){
    return(
        <View>
            <Image source={image} style={styles.image} />
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.status}>{status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:330,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:20
    },
    number:{
        position:'absolute',
        right:30,
        top:35,
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    },
    status:{
        position:'absolute',
        right:30,
        top:75,
        color:'#fff',
        fontWeight:'bold'
    }
})