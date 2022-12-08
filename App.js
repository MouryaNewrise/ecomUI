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
// import ResentAddProduct from './src/dashboard/ResentAddProduct';
// // import SigninFirebase from './src/trialFiles/SiginFirebase';

// const App = ({navigation}) => {
//   return (
//     <>
//       {/* <SigninFirebase /> */}
//       <ResentAddProduct />
//       {/* <View>
//         <Text>jkaf</Text>
//       </View> */}
//     </>
//   );
// };

// export default App;
