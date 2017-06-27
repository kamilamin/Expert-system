import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseApp } from './firebase';
import { logUser } from './actions'
import reducer from './reducers'

import App from './components/App';
import Signup from './components/Signup';
import Login from './components/Login';


firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('User has Signed in or up', user)
        const { email } = user;
        store.dispatch(logUser(email))
        history.push('/App');
    } else {
        console.log('User has Signed out or Still need to Sign in.')
        history.replace('/Login');
    }
});


const history = createBrowserHistory();
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <Router path='/' history={history}>
                <Route path='/App' component={App} />
                <Route path='/Login' component={Login} />
                <Route path='/Signup' component={Signup} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
