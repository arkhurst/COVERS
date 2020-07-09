import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import getDirections from 'react-native-google-maps-directions';
import font_sizes from '../../../constants/font_sizes';
import colors from '../../../constants/colors';
import { useQuery } from '@apollo/react-hooks';
import { getTestingCenters } from '../../../graphql/queries/queries';
import { FlatList } from 'react-native-gesture-handler';

export default function TestinCenters({close, visible}){
    const {loading, data, refetch } = useQuery(getTestingCenters)

    const handleGetDirections = ({latitude, longitude}) => {
        const data = {
          
            destination:{
                latitude:latitude, 
                longitude:longitude
            },
            params: [
                {
                    key:'travelmode',
                    value:'driving'
                },
                {
                    key:'dir_action',
                    value:'navigate'
                }
            ],
        }

        getDirections(data)
    }
    return(
        <Modal visible={visible} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Testing Centers</Text>
                    <TouchableOpacity onPress={() => close(3)}>
                        <Ionicons  name="ios-close" size={40} />
                    </TouchableOpacity>
                </View>
                {loading ? (
                    <Text>Getting Testing Centers...</Text>
                ):(
                   <Fragment>
                       <FlatList 
                         data={data?.testingSites}
                         renderItem={({item}) => (
                            <View style={{borderBottomWidth:StyleSheet.hairlineWidth, borderColor:colors.borderColor}}>
                            <View style={styles.venueContainer}>
                                <View>
                                    <Text style={styles.medium}>{item.address}</Text>
                                    <Text style={{color:colors.grey, fontWeight:'600', paddingTop:6}} >{item.placesName}</Text>
                                </View>
                                <TouchableOpacity onPress={() => handleGetDirections({
                                    latitude: item.location.coordinates[1],
                                    longitude: item.location.coordinates[0]
                                })}  >
                                     <Text style={{color:colors.tomato, fontWeight:'500'}}>Get Directions</Text>
                                </TouchableOpacity>
                            </View>
                         </View> 
                         )}
                         keyExtractor={(item) => item.createdAt}
                         refreshing={loading}
                         onRefresh={() => refetch()}
                         showsVerticalScrollIndicator={false}
                       />
             
                 </Fragment> 
                )}
            
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight,
      paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      headerTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
        fontSize: font_sizes.h1,
      },
      venueContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:20
      },
      medium: {
        fontFamily: 'AirbnbCereal-Medium',
        letterSpacing: -0.3,
        fontSize: font_sizes.t3,
      },
})