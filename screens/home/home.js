import React from 'react';
import { View, StyleSheet, Text,Dimensions, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import LottieView from 'lottie-react-native';
import * as load from '../../assets/lottie/loading.json';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {  News } from '../../data/data';
import { getCountry } from '../../queries/queries';
import SliderComponent from '../../components/home/sliderComponent';
import NewsComponent from '../../components/home/newsComponent';

const { width, height } = Dimensions.get('window');
export default function HomeScreen(){

    const { loading, data } = useQuery(getCountry)
   console.log(data)
    if(loading){
        return (
            <View style={{ paddingTop:Constants.statusBarHeight}}>
                <View style={{marginTop:height/2.8}}>
                 <ActivityIndicator size="large" />
                </View>
            </View>
    
        )
    }
    return(
        <View style={styles.container}>
          <Header>
           <Text>Home</Text>
            </Header>
            <ScrollView>
            {/* Slider Items */}
             <View>
              <SliderComponent data={data} />
             </View>
             <View style={styles.bodyContainer}>
                <Text style={styles.headerText}>Ghana's Situation Updates</Text>
                <Text style={styles.updatedTime}>Last updated : 4/04/2020</Text>
               {/* News Items */}
                <FlatList 
                  scrollEnabled={false}
                  data={News}
                  renderItem={({item}) => (
                      <NewsComponent {...item} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
             </View>
             </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    bodyContainer:{
        marginHorizontal:15,
    },
    headerText:{
        fontSize:15,
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.8   
    },
    updatedTime:{
        fontSize:11, 
        color:'grey',  
        fontFamily:'AirbnbCereal-Bold',
        letterSpacing:-0.8 
    },
    lottie:{
        height:200, 
        width:200
    }
})