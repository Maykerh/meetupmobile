import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator({
            Sign: createSwitchNavigator({
                SignIn,
                SignUp
            })
        })
    );
