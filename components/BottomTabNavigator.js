import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Transaction from '../screens/Transaction';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
             <Tab.Navigator>
                <Tab.Screen name="Transacción" component={Transaction}/>
                <Tab.Screen name="Búsqueda" component={Search}/>
                

             </Tab.Navigator>
            </NavigationContainer>
        )
    }
}