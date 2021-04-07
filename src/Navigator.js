import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Splash from './screens/Splash'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

console.disableYellowBox = true; 

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login Usuário' } },
    Register: { screen: Register, navigationOptions: { title: 'Registrar Usuário' } }
}, {
    initialRouteName: 'Login',
    navigationOptions: {
        headerStyle:{backgroundColor:'#309F41'},
        headerTintColor:'white',
        gesturesEnabled:false
  },
        cardStyle: {
            backgroundColor: 'white'
        }


})

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Auth'
})

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='newspaper-o' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='plus-circle' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor}) =>
                <Icon name='user-circle' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#309F41'

    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: MenuNavigator,
}, {
    initialRouteName: 'Splash'
})

export default SplashRouter