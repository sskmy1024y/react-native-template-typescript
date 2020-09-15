import React from 'react';
import AppStackScreen from 'navigation/NavigationStack';
import {Provider} from 'react-redux';
import store from 'configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppStackScreen />
    </Provider>
  );
};

export default App;
