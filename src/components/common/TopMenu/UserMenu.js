import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import UserIcon from 'react-icons/lib/go/octoface';
import AdminIcon from 'react-icons/lib/go/tools';

const ICON_SIZE = 24;

const getTitle = (isAdmin, title) => (
  <span>
    {
      isAdmin
        ? <AdminIcon size={ICON_SIZE} />
        : <UserIcon size={ICON_SIZE} />
    } {title}
  </span>
);

export default class UserMenu extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    goToProfile: PropTypes.func.isRequired
  };

  render() {
    const {isAdmin, name} = this.props;
    return (
      <NavDropdown title={getTitle(isAdmin, name)} id="userMenu">
        <MenuItem onClick={this.props.goToProfile}>
          <span>Profile</span>
        </MenuItem>
        <MenuItem divider />
        <MenuItem onClick={this.props.logout}>
          Logout
        </MenuItem>
      </NavDropdown>
    );
  }
}
