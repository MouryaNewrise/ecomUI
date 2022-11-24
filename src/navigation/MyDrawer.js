import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstScreen from '../screen/FirstScreen';
import RegisterUi from '../screen/RegisterUi';
import LogoutUi from '../screen/LogoutUi';
import SettingUi from '../screen/SettingUi';
import AntDesign from 'react-native-vector-icons';
import {Colors} from '../assets/Assets';
import CustomDrawer from './CustomDrawer';

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
      <Drawer.Screen name="SignUp/Login" component={RegisterUi} />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Settings"
        component={SettingUi}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="SignUp/SignIn"
        component={RegisterUi}
      />
      {/* <Drawer.Screen
        options={{headerShown: false}}
        name="View Order"
        component={ViewOrder}
      /> */}
      <Drawer.Screen
        options={{headerShown: false}}
        name="Logout"
        component={LogoutUi}
      />
    </Drawer.Navigator>
  );
}
