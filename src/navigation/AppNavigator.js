import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Registration from '../modules/registration/Registration'
import LandingPage from '../modules/landingpage/LandingPage'
import Login from "../modules/login/Login";
// import HomePage from '../modules/homePage/HomePage'
import ScreenSwitcher from './ScreenSwitcher'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Users from '../modules/homePage/users/Users'
import Colors from '../modules/homePage/colors/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../helpers/Responsive'
import Settings from '../modules/homePage/settings/Settings'
const TabBar = createMaterialTopTabNavigator({
    Users: Users,
    Colors: Colors,
    Settings: Settings
}, {
    lazy: true,
    initialRouteName: 'Users',
    headerLayoutPreset: 'center',
    headerMode: "",
    defaultNavigationOptions: {
        gesturesEnabled: false,
        headerBackTitle: null,
    },
    tabBarOptions: {
        style: {
            backgroundColor: '#fff',
            // marginTop: -height
        },
        activeTintColor: '#538AFF',
        inactiveTintColor: '#a8c4ff',
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: '#538AFF',
            width: responsiveWidth(25),
            height: responsiveWidth(1.5),
            marginLeft: responsiveWidth(4.5),
            alignContent: 'center',
            borderRadius: responsiveWidth(5)
        },
        inactiveBackgroundColor: '#fff',
    },

})
const AuthStack = createStackNavigator({
    LandingPage: LandingPage,
    Registration: Registration,
    Login: Login,
},
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerBackTitle: null
        }

    }
)

const AppStack = createStackNavigator({
    TabBar: TabBar,
},
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerBackTitle: null
        }

    }
)

const Navigator = createSwitchNavigator({
    ScreenSwitcher: ScreenSwitcher,
    App: AppStack,
    Auth: AuthStack
},
    {
        initialRouteName: 'ScreenSwitcher',
        defaultNavigationOptions: {
            gesturesEnabled: false,
            headerBackTitle: null
        },
    })

const AppNavigator = createAppContainer(Navigator)

export default AppNavigator