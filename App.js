import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import RootNavigation from './src/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import MyTab from './src/navigation/MyTab';
import MyDrawer from './src/navigation/MyDrawer';
const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
      {/* <NavigationContainer>
        <MyTab />
        <MyDrawer />
      </NavigationContainer> */}
    </Provider>
  );
};

export default App;
