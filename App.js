import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import WelcomeScreen from './src/dashboard/WelcomeScreen';

// const App = () => {
//   return (
//     <>
//       <WelcomeScreen />
//     </>
//   );
// };

// export default App;
