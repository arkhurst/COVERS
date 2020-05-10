import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NewsComponent({title, body}){
    return(
            <View style={styles.newsContainer}>
                <View style={styles.border}>
                   <Text style={styles.headerText}>{title}</Text>
                </View>
                <View style={styles.newsBody}>
                    <Text>{body}</Text>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    newsContainer:{
        marginHorizontal:20,
        paddingTop:40
    },
    border:{
        borderBottomWidth:StyleSheet.hairlineWidth, 
        borderColor:'grey'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:15
    },
    newsBody:{
        marginTop:15
    }
})