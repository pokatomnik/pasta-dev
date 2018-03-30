import * as userActionTypes from './actionTypes';
import * as errorActionTypes from '../error/actionTypes';
import Backendless from 'backendless';
import {LocalStorageService} from '../../services/LocalStorage';
import {lsKey} from '../../constants';
import {push} from 'react-router-redux';

export default {
  [userActionTypes.login]: (email, password, goHome = false) => (dispatch, getState) => {
    const ls = new LocalStorageService(lsKey);
    Backendless.UserService
      .login(email, password)
      .then(({email, isAdmin, name}) => {
        ls.save({ email, password });
        dispatch({
          type: userActionTypes.login,
          email,
          isAdmin,
          name
        });
        if (goHome) {
          dispatch(push('/'));
        }
      })
      .catch((error) => {
        ls.flush();
        dispatch({
          type: errorActionTypes.setError,
          title: 'Can\'n login',
          text: 'Invalid login and/or password'
        });
      });
  },
  [userActionTypes.logout]: (goHome = false) => (dispatch) => {
    const ls = new LocalStorageService(lsKey);
    Backendless.UserService
      .logout()
      .then(() => {
        ls.flush();
        dispatch({
          type: userActionTypes.logout
        });
        if (goHome) {
          dispatch(push('/'));
        }
      })
      .catch((error) => {
        ls.flush();
        dispatch({
          type: errorActionTypes.setError,
          title: 'Can\'t logout',
          text: 'Unknown error'
        });
      })
  }
};
