import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Incidents from './incidents';
import Details from './details';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidentes" component={Incidents}/>
                <AppStack.Screen name="Detalhe" component={Details}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}