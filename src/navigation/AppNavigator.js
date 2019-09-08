import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Registration from '../modules/registration/Registration'
// =
const Navigator = createStackNavigator({
    Registration: Registration
},
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerBackTitle: null
        }

    }
)

const AppNavigator = createAppContainer(Navigator)

export default AppNavigator