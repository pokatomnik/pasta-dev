import * as actionTypes from './actionTypes';
import Backendless from 'backendless';
import {LocalStorageService} from '../../services/LocalStorage';
import {lsKey} from '../../constants';
import {push} from 'react-router-redux';

export default {
  [actionTypes.login]: (email, password, goHome = false) => (dispatch, getState) => {
    const ls = new LocalStorageService(lsKey);
    Backendless.UserService
      .login(email, password)
      .then(({email, isAdmin, name}) => {
        ls.save({ email, password });
        dispatch({
          type: actionTypes.login,
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
          type: actionTypes.login,
          error
        });
        //todo show an error
      });
  },
  [actionTypes.logout]: (goHome = false) => (dispatch) => {
    const ls = new LocalStorageService(lsKey);
    Backendless.UserService
      .logout()
      .then(() => {
        ls.flush();
        dispatch({
          type: actionTypes.logout
        });
        if (goHome) {
          dispatch(push('/'));
        }
      })
      .catch((error) => {
        ls.flush();
        dispatch({
          error
        });
        //todo show an error
      })
  }
};
