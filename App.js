import React from 'react';
import { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountPage from './screens/AccountPage';
import FeedPage from './screens/FeedPage';
import SearchPage from './screens/SearchPage';
import WagerPage from './screens/WagerPage';
import CommentScreen from './screens/CommentScreen';
import UserProfile from './screens/UserProfile';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("This opened correctly!");
    fetch('https://rebet-deployment.onrender.com/api/load-test')
    .then(response => response.json())
    .then(data => {
      console.log("error", data);
    })
    .catch(error => {
      console.log("Oh no", error);
    });
    console.log("End");
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={"Feed"} component={FeedPage} options = {{headerShown: false}}/>
          <Tab.Navigator>
            <Tab.Screen name={"Feed"} component={FeedPage} options = {{headerShown: false}}/>
            <Tab.Screen name={"Search"} component={SearchPage} options = {{headerShown: false}}/>
            <Tab.Screen name={"Account"} component={AccountPage} options = {{headerShown: false}}/>
          </Tab.Navigator>
        <Stack.Screen name={"Wager"} component={FeedPage} options = {{headerShown: false}}/>
          <Tab.Navigator>

          </Tab.Navigator> */}



        <Stack.Screen name={"Login"} component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name={"Account"} component={AccountPage} options={{headerShown: false}}/>
        <Stack.Screen name={"Feed"} component={FeedPage} options = {{headerShown: false}}/>
        <Stack.Screen name={"Search"} component={SearchPage} options = {{headerShown: false}}/>
        <Stack.Screen name={"Wager"} component={WagerPage} options = {{headerShown: false}}/>
        <Stack.Screen name={"Comment"} component={CommentScreen} options = {{headerShown: false}}/>
        <Stack.Screen name={"User"} component={UserProfile} options = {{headerShown: false}}/>
        <Stack.Screen name={"Sign Up"} component={SignUpScreen} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}