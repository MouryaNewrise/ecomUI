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
// import React from 'react';
// import UseRefHook from './src/hooks/UseRefHook';

// const App = () => {
//   return (
//     <>
//       <UseRefHook />
//     </>
//   );
// };

// export default App;
