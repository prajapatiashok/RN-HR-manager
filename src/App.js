import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
       
        //Firebase initialize configuration

        // var firebaseConfig = {
        //     apiKey: '*********************0',
        //     authDomain: '***********',
        //     databaseURL: '**************',
        //     projectId: '**********',
        //     storageBucket: '*********',
        //     messagingSenderId: '********'
        //   };
        //   // Initialize Firebase
        //   if (!firebase.apps.length) {
        //     firebase.initializeApp(firebaseConfig);
        // }

        

    }
    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>    
        );
    }
}

export default App;