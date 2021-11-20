import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {TEXT_STYLE} from '../../../assets/styles'

function MovieDetails({route}) {

    let data = route.params
    return (
        <SafeAreaView style={styles.movieDetailsContainer}>
            <Image source ={data.img} style={{width: '40%', height:'40%', }} />
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Title</Text>
            <Text>{data.title}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Plot:</Text>
            <Text style={{width:'80%',textAlign:'justify'}}>{data.plot}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Runtime:</Text>
            <Text>{data.runtime}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Directors:</Text>
            <Text>{data.director}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Boxoffice:</Text>
            <Text>{data.boxoffice}</Text>
            {/* <TouchableOpacity>
            <Text>{data.rating1}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>{data.rating2}</Text>
            </TouchableOpacity><TouchableOpacity>
            <Text>{data.rating3}</Text>
            </TouchableOpacity> */}
            {/* <Text>{data.rating2}</Text>
            <Text>{data.rating3}</Text> */}
        </SafeAreaView>
    );
}

const styles = {
    movieDetailsContainer: {
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: TEXT_STYLE,
}



export default MovieDetails