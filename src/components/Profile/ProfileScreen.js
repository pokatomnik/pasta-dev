import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {selectUser} from '../../selectors/user/user';
import Profile from './Profile';
import PastaList from './PastaList';
import errorActions from '../../actions/error/error';
import * as actionTypes from '../../actions/error/actionTypes';
import Card from '../common/Card';

class ProfileScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    
    this.showError = this.showError.bind(this);
  }

  showError(title, text) {
    this.props.dispatch(this.props.setError(title, text));
  }

  render() {
    return (
      <Row>
        <Col md={7}>
          <Card>
            <h1>
              Profile - {this.props.user.name}
            </h1>
            <Profile {...this.props.user} />
          </Card>
        </Col>
        <Col md={5}>
          <Card>
            <PastaList isAuthenticated={!!this.props.user.email}
                      showError={this.showError} />
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  user: selectUser(state)
});

const mapActionsToProps = (dispatch) => ({
  setError: errorActions[actionTypes.setError],
  dispatch
});

export default connect(mapStateToProps, mapActionsToProps)(ProfileScreen);
