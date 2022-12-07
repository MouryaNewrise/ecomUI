import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstScreen from '../screen/FirstScreen';
import RegisterUi from '../screen/RegisterUi';
import LogoutUi from '../screen/LogoutUi';
import SettingUi from '../screen/SettingUi';
import AntDesign from 'react-native-vector-icons';
import {Colors} from '../assets/Assets';
import CustomDrawer from './CustomDrawer';
import ViewOrder from '../screen/ViewOrder';
import HomeUi from '../screen/HomeUi';
import AddProduct from '../dashboard/AddProduct';
import ResentAddProduct from '../dashboard/ResentAddProduct';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      options={{
        headerShown: false,
        drawerIcon: () => {
          return <AntDesign name={'user'} />;
        },
      }}
      initialRouteName="SignUp/Login"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {marginTop: 1},
        drawerActiveBackgroundColor: Colors.blue,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        activeTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="SignUp/Login"
        component={RegisterUi}
        // options={{
        //   drawerIcon: ({focused, size}) => (
        //     <Ionicons
        //       name="md-home"
        //       size={size}
        //       color={focused ? '#7cc' : '#ccc'}
        //     />
        //   ),
        // }}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeUi}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Settings"
        component={SettingUi}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Add Product"
        component={AddProduct}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Resent Add Product"
        component={ResentAddProduct}
      />
      <Drawer.Screen
        // options={{headerShown: false}}
        name="View Order"
        component={ViewOrder}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Logout"
        component={LogoutUi}
      />
    </Drawer.Navigator>
  );
}
