import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Slider, News } from '../../data/data';
import SliderComponent from '../../components/home/sliderComponent';
import NewsComponent from '../../components/home/newsComponent';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Header>
                <Text>Home</Text>
            </Header>
            <ScrollView>
            {/* Slider Items */}
             <View>
                <FlatList 
                  data={Slider}
                  renderItem={({item}) => (
                      <SliderComponent {...item} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                />
             </View>
             <View style={styles.bodyContainer}>
                <Text style={styles.headerText}>Ghana's Situation Updates</Text>
                <Text style={{fontSize:11, color:'grey', fontWeight:'bold'}}>Last updated : 4/04/2020</Text>
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
        fontWeight:'bold',
        fontSize:14
    }
})