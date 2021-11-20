import { StatusBar } from 'expo-status-bar';
// from expo
import React from 'react';
// need this because we are using jsx even in react native
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/containers/login';
import Register from './src/containers/register';
// to use navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/containers/home';
import MovieDetails from './src/containers/movieDetails';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
    {/* style={styles.container} */}
      {/* <Text>Welcome to my app !!!</Text>
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      {/* <Register /> */}
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerRight: null
            
          }} />
          <Stack.Screen name="Register" component={Register} options={{
            title: 'Register Page'
          }}/>
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// StyleSheet.create is redundant because it is just an object, can just omit the stylesheet create and just define the object
