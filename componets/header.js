import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileModal from './profileModal';


const { width, height } =Dimensions.get('window');

const Header = (props) =>{

    const [visible, setVisible ] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    

      const cancel = () => {
        setVisible(false);
      };
      const openModal = () => {
        setVisible(!visible);
      };

 

    return(
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <TouchableOpacity onPress={openModal}>
                  <FontAwesome name="user-circle" size={33} />
                  <ProfileModal visible={visible} cancel={cancel} />
                </TouchableOpacity>  
               <Text style={styles.headerTitle}>{props.children}</Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={toggleModal} >
                <FontAwesome name='bell-o' size={30} color="black" />
 
            </TouchableOpacity>
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
        height:height*0.14,
        paddingHorizontal:20
      
    },
    firstContainer:{
        justifyContent:'space-around'
    },
    icon:{
        marginTop:10
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'bold'
    }
})

export default Header;