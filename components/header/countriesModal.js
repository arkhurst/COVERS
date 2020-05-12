import React from 'react';
import { View, Text, Modal, StyleSheet, Image, ActivityIndicator, SectionList } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

const ListCountries = (props) => {
    return(
        <View style={styles.listContainer}>
          <TouchableOpacity  style={styles.items}>
            <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{ uri: props.countryInfo.flag }}
            />
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '600' }}>
          {props.country}
        </Text>
      </TouchableOpacity>
        </View>
    )
}

export default function CountriesModal({visible, close, loading, data}){
    return(
        <Modal visible={visible} animationType={'slide'} >
            <View style={styles.container}>
                <TouchableOpacity onPress={close} >
                    <Ionicons name="ios-close" size={40} />
                </TouchableOpacity>
                {loading ? (
                    <View style={{alignItems:'center'}}>
                        <ActivityIndicator />
                    </View>    
                ):(
                    <View>
                        {data &&(
                            <FlatList
                              renderItem={({item}) => <ListCountries {...item} />}
                              data={data.countries}
                              keyExtractor={(index, item) => index.toString()}
                            />
                        )}
                     </View>   
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight,
        paddingHorizontal:20
    },
    listContainer: {
        borderBottomWidth: 1,
        borderColor: '#dedede',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      items: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})