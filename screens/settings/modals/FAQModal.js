import React  from 'react';
import { View, Text, Button, StyleSheet, Modal} from 'react-native';
import Constants from 'expo-constants';
import FAQComponent from '../../../components/settings/faq';

export default function FAQModal({close, visible}){
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
            <Button title="close" onPress={() => close(2)} />
            <Text>FAQ</Text>
            </View>
           <FAQComponent />
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      paddingTop:Constants.statusBarHeight
    }
})