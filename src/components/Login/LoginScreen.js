import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Login from './Login';
import {login} from '../../actions/user/actionTypes';
import userActions from '../../actions/user/user';

import './LoginScreen.css';

class LoginScreen extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    
    this.login = this.login.bind(this);
  }

  login(email, password) {
    this.props.dispatch(this.props.login(email, password, true));
  }

  render() {
    return (
      <div className="login-screen">
        <Login login={this.login} />
      </div>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  login: userActions[login],
  dispatch
});

export default connect(null, mapActionsToProps)(LoginScreen);
