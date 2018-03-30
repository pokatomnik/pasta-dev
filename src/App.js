import React, { Component } from 'react';
import Backendless from 'backendless';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import user from './reducers/user/user';
import error from './reducers/error/error';
import thunk from 'redux-thunk';
import Home from './components/Home/Home';
import LoginScreen from './components/Login/LoginScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import Error from './components/Error/Error';
import TopMenu from './components/common/TopMenu/TopMenu';
import {LocalStorageService} from './services/LocalStorage';
import {lsKey} from './constants';
import userActions from './actions/user/user';
import {login} from './actions/user/actionTypes';
import texture from './assets/back.png';

const history = createHistory();

const router = routerMiddleware(history);

const store = createStore(combineReducers({
  // my reducers
  user,
  error,
  // router
  router: routerReducer
}), applyMiddleware(
  router,
  thunk
));

/* Setup the Backendless */
const APP_ID = '018B2CDC-5E5C-A973-FF91-BF05D0515600';
const API_KEY = 'D7E605B3-57C4-82FB-FF55-6D3E8E08BD00';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const style = {
  backgroundImage: `url('${texture}')`,
  minHeight: '100vh'
};

class App extends Component {
  componentDidMount() {
    const ls = new LocalStorageService(lsKey);
    const {email, password} = ls.load();
    if (!email || !password) {
      return;
    }
    store.dispatch(userActions[login](email, password));
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App" style={style}>
            <TopMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Error />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
