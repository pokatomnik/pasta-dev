import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AnonymousIcon from 'react-icons/lib/go/gist-secret';
import NavItem from 'react-bootstrap/lib/NavItem';

// todo add onclick login
export default class LoginButton extends PureComponent {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.navigateToLogin = this.navigateToLogin.bind(this);
  }

  navigateToLogin() {
    this.props.navigate();
  }

  render() {
    return (
      <NavItem onClick={this.navigateToLogin}>
        <span><AnonymousIcon size={24} /> Login</span>
      </NavItem>
    );
  }
}