import React, { Component } from 'react';
import {CreateBottomNavigator}  from "react-navigation/bottom-tabs";
import Feed  from "../screen/Feed";
import CreatePost  from "../screen/CreatePost";

const Tab = CreateBottomNavigator();

const BottomTabNavigator = () => {
    return (

        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if(route.name === 'Feed') {
                    iconName = focused
                    ? 'book'
                    : 'book-outline';
                }else if (route.name === 'CreateStory') {
                    iconName = focused 
                    ? 'create'
                    : 'create-outline'
                }
                return <Ionicons name={iconName} 
                size={size}
                color={color} />;
            }
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }}
        >
            <Tab.Screen name='Feed' componet={Feed} />
            <Tab.Screen name='CreatePost' component={CreatePost} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator


   
       
    
