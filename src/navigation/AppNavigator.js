import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Registration from '../modules/registration/Registration'
import LandingPage from '../modules/landingpage/LandingPage'
import Login from "../modules/login/Login";
// =
const Navigator = createStackNavigator({
    LandingPage: LandingPage,
    Registration: Registration,
    Login: Login
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