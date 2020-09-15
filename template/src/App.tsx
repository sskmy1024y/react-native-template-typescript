import React from 'react';
import AppStackScreen from 'navigation/NavigationStack';
import {Provider} from 'react-redux';
import store from 'configureStore';
import {AppearanceProvider} from 'react-native-appearance';

const App = () => {
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <AppStackScreen />
      </AppearanceProvider>
    </Provider>
  );
};

export default App;
