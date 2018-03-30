import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {selectUser} from '../../selectors/user/user';
import Profile from './Profile';

class ProfileScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <Row>
        <Col md={2} />
        <Col md={8}>
          <h1>
            Profile - {this.props.user.name}
          </h1>
          <Profile {...this.props.user} />
        </Col>
        <Col md={2} />
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  user: selectUser(state)
});

export default connect(mapStateToProps)(ProfileScreen);
