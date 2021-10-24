/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';

const App = () => {
  return (
    <SafeAreaView>
      <Maps />
    </SafeAreaView>
  );
};

export default App;
