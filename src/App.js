import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC7NoJ3wNiN1Pd3ko-Ki2i2xE2wA895m7Q',
      authDomain: 'manager-bc23f.firebaseapp.com',
      databaseURL: 'https://manager-bc23f.firebaseio.com',
      projectId: 'manager-bc23f',
      storageBucket: '',
      messagingSenderId: '494339733223',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
