import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants'


const Header = ({title, navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.firstContainer}>
               <FontAwesome name="user-circle" size={34} />
               <Text>Title</Text>
            </View>
            <View>
                <FontAwesome name='bell-o' size={34} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'grey',
        justifyContent:'space-between',
        paddingTop:Constants.statusBarHeight
    },
    firstContainer:{
        justifyContent:'space-between'
    }
})

export default Header;