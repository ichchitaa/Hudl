import React, {useEffect, useState} from "react";
import { response } from "express";
import {FlatList} from 'react-native';
import { View, Text } from "react-native";

export default MovieLoader = () => {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
console.log(data);
// async function getMovies() {
//     fetch('https://reactnative.dev/movies.json')
//     .then((value) => {
//         setLoading(false)
//         setData(value)
//     })
//     .catch((error) => {
//         console.error(error);
//      });
// }
useEffect(() => {
    // getMovies();
    fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

return (
    <View>
        <FlatList data={data} renderItem={({item}) => <Text>{item.title}</Text>} keyExtractor={({ id }, index) => id} />
    </View>

);
};
