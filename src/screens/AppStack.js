import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import Home from './Home';
import Explore from './Explore';
import Notification from './Notification';
import ProfileScreen from './Profile';
import homeIcon from '../images/home.png';
import homeIcon2 from '../images/home2.png';
import compIcon from '../images/comp.png';
import compIcon2 from '../images/comp2.png';
import Notificationimg from '../images/notification.png';
import Notificationimg2 from '../images/notification2.png';
import Profile from '../images/profile.png';
import Profile2 from '../images/profile2.png';

const AppStack=({navigation,routes})=>{

    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator tabBarOptions={{showLabel:false}}>
            <Tab.Screen component={Home} name="home" options={{tabBarIcon:({focused})=><Image source={focused ? homeIcon : homeIcon2} resizeMode="contain"  />}}/>
            <Tab.Screen component={Explore} name="explore" options={{tabBarIcon:({focused})=><Image source={focused ? compIcon2 : compIcon } resizeMode="contain" />}}/>
            <Tab.Screen component={Notification} name="notification" options={{tabBarIcon:({focused})=><Image source={focused ? Notificationimg : Notificationimg2 } resizeMode="contain" />}}/>
            <Tab.Screen component={ProfileScreen} name="profilescreen" options={{tabBarIcon:({focused})=><Image source={focused ? Profile2 : Profile } resizeMode="contain" />}}/>
        </Tab.Navigator>
    );
}

export default AppStack;