import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeUi from '../screen/HomeUi';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FavoriteUi from '../screen/FavoriteUi';
import ProfileUi from '../screen/ProfileUi';
import {Colors} from '../assets/Assets';
import MyTabCart from '../screen/MyTabCart';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  const like = useSelector(state => state.toCart.items);

  return (
    <Tab.Navigator
      //   tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeUi}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteUi}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
          headerShown: false,
          tabBarBadge: like.length,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={MyTabCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileUi}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
