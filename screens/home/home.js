import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/header/header';
import { FlatList } from 'react-native-gesture-handler';
import { Slider } from '../../data/sliderItems';
import SliderComponent from '../../components/home/sliderComponent';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Header>
                <Text>Home</Text>
            </Header>
             <View style={styles.slider}>
                <FlatList 
                  data={Slider}
                  renderItem={({item}) => (
                      <SliderComponent {...item} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                />
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    slider:{
        marginVertical:0,
    }
})