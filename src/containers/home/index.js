import React from 'react'
import {View, SafeAreaView, Text,ScrollView, Image, TouchableOpacity} from 'react-native'
import {TEXT_STYLE,TEXT_STYLE_SUB} from '../../../assets/styles'




// const images = {
//     logo1: require('../../../assets/mov2.jpg'),
//     logo2: require('../../../assets/mov3.jpg'),
//     logo3: require('../../../assets/mov4.jpg'),
//     logo4: require('../../../assets/mov5.jpg'),
//     logo5: require('../../../assets/mov6.jpg'),
//     logo6: require('../../../assets/mov7.jpg'),
// }

const DATA = [{
    title: 'Movie 1', plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 1', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 2',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 2', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 3',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov3.jpg'), runtime: '150 minutes', director: 'directors 3', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 4',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov4.jpg'), runtime: '150 minutes', director: 'directors 4', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 5',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov5.jpg'), runtime: '150 minutes', director: 'directors 5', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 6',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov6.jpg'), runtime: '150 minutes', director: 'directors 6', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 7',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov7.jpg'), runtime: '150 minutes', director: 'directors 7', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 8',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov6.jpg'), runtime: '150 minutes', director: 'directors 8', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 9',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 9', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
},
{
    title: 'Movie 10',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov3.jpg'), runtime: '150 minutes', director: 'directors 10', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
}]

function Home(props){

    const _renderList = (data) => {
        return (
            <View  style={styles.cardStyle}>
                <Text style={styles.textStyle}>{data.title}</Text>
                {/* onPress={() => props.navigation.navigate("MovieDetails")} */}
                {/* <Text>{data.plot}</Text> */}
                <Image source ={data.img} style={{width: 60, height:60, borderRadius: 5}}  />
                <TouchableOpacity onPress={() => props.navigation.navigate("MovieDetails", data)}>
                    <Text style = {styles.textStyleSub}>More details here</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    // , alignItems: 'center'
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between'}}>
            {/*  horizontal = {true} */}
                {/* <Text>This is home page</Text> */}
                {/* <Text>Bla bla bla</Text> */}
                {/* {
                    DATA.map(list => 
                    <View style={styles.cardStyle}>
                        <Text>list</Text>
                    </View>)
                } */}

                {/* alternative method */}
                {
                    
                    DATA.map(list => _renderList(list))
                }
            </ScrollView>
        </SafeAreaView>
    )
    
}

const styles = {
    cardStyle: {
        width: 150,
        height: 150,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
        
    },
    textStyle: TEXT_STYLE,
    textStyleSub: TEXT_STYLE_SUB
}

export default Home;