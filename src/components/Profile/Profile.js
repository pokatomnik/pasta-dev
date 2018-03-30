import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import bem from '../../services/bem';

import './Profile.css';

const BLOCK_NAME = 'profile';

const titleClass = bem(BLOCK_NAME, 'title', 'pull-right');

const valueClass = bem(BLOCK_NAME, 'value');

export default class Profile extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.bool
  };

  render() {
    return (
      <div>
        <Row key="name">
          <Col md={3}>
            <span className={titleClass}>
              User Name:
            </span>
          </Col>
          <Col md={9}>
            <span className={valueClass}>
              {this.props.name}
            </span>
          </Col>
        </Row>

        <Row key="email">
          <Col md={3}>
            <span className={titleClass}>
              Email:
            </span>
          </Col>
          <Col md={9}>
            <span className={valueClass}>
              {this.props.email}
            </span>
          </Col>
        </Row>

        <Row key="isAdmin">
          <Col md={3}>
            <span className={titleClass}>
              Is admin:
            </span>
          </Col>
          <Col md={9}>
            <input type="checkbox" disabled checked={this.props.isAdmin} />
            &nbsp;
            <span className={valueClass}>{this.props.isAdmin ? 'yes' : 'no'}</span>
          </Col>
        </Row>
      </div>
    );
  }
}