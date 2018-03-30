import React, {PureComponent} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {
  selectIsAdmin,
  selectIsLogged,
  selectName
} from '../../../selectors/user/user';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import UserMenu from './UserMenu';
import {logout} from '../../../actions/user/actionTypes';
import userActions from '../../../actions/user/user';

import './TopMenu.css';

class TopMenu extends PureComponent {
  static propTypes = {
    isLogged: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.renderUserStuff = this.renderUserStuff.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
  }

  goToProfile() {
    this.props.dispatch(push('/profile'));
  }

  navigateToLogin() {
    this.props.dispatch(push('/login'));
  }

  logout() {
    this.props.dispatch(this.props.logout(true));
  }

  renderUserStuff() {
    if (this.props.isLogged) {
      return (
        <UserMenu isAdmin={this.props.isAdmin}
                  name={this.props.name}
                  logout={this.logout}
                  goToProfile={this.goToProfile} />
      );
    } else {
      return (
        <LoginButton navigate={this.navigateToLogin} />
      );
    }
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className="top-menu">
        <Navbar.Header>
          <Navbar.Brand>
            Pasta
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              Create
            </NavItem>
            <NavDropdown title="Documentation" id="docsDropdown">
              <MenuItem>
                Read docs
              </MenuItem>
              <MenuItem>
                FAQ
              </MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {this.renderUserStuff()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: selectIsLogged(state),
  isAdmin: selectIsAdmin(state),
  name: selectName(state)
});

const mapActionsToProps = (dispatch) => ({
  logout: userActions[logout],
  dispatch
});

export default connect(mapStateToProps, mapActionsToProps)(TopMenu);