import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { selectErrorExists, selectError } from '../../selectors/error/error';
import * as actionTypes from '../../actions/error/actionTypes';
import errorActions from '../../actions/error/error';

class Error extends PureComponent {
  static propTypes = {
    errorExists: PropTypes.bool.isRequired,
    removeError: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.removeError = this.removeError.bind(this);
  }

  removeError() {
    this.props.dispatch(this.props.removeError());
  }

  render() {
    if (!this.props.errorExists) {
      return null;
    }

    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            {this.props.error.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.error.text}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.removeError} bsStyle="danger">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  errorExists: selectErrorExists(state),
  error: selectError(state)
});

const mapActionsToProps = (dispatch) => ({
  removeError: errorActions[actionTypes.removeError],
  dispatch
});

export default connect(mapStateToProps, mapActionsToProps)(Error);
