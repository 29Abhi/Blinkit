import {View, Text} from 'react-native';
import React from 'react';
import Navigation from '@navigation/Navigation';
import {store} from '@redux/store';
import {Provider} from 'react-redux';
import "react-native-gesture-handler"

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
