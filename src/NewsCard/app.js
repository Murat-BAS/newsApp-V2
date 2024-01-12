import React from 'react';
import { SafeAreaView, Text, FlatList, View, Image } from 'react-native';
import news_data from '../news_data.json'
import Styles from './style'

const news = ({ newsCont }) => {
    return (
        <View style={Styles.container_card}>
            <Image source={{ uri: newsCont.imageUrl }} style={Styles.image}></Image>
            <View style = {Styles.text_container}>
                <Text style={Styles.title}>{newsCont.title}</Text>
                <Text style={Styles.desp}>{newsCont.description}</Text>
                <Text style = {Styles.name}>{newsCont.author}</Text>
            </View>
        </View>
    );
}

export default news;