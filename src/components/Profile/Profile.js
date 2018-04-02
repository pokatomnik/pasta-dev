import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import bem from '../../services/bem';

import './Profile.css';

const BLOCK_NAME = 'profile';

const titleClass = bem(BLOCK_NAME, 'title');
const valueClass = bem(BLOCK_NAME, 'value');
const pastaRowClass = bem(BLOCK_NAME, 'row');

const KEY_LENGTH = 5;
const VALUE_LENGTH = 5;

export default class Profile extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.bool
  };

  render() {
    return (
      <div>
        <Row key="name" className={pastaRowClass}>
          
          <Col md={KEY_LENGTH}>
            <span className={titleClass}>
              User Name:
            </span>
          </Col>
          <Col md={VALUE_LENGTH}>
            <span className={valueClass}>
              {this.props.name}
            </span>
          </Col>
          
        </Row>

        <Row key="email" className={pastaRowClass}>
          
          <Col md={KEY_LENGTH}>
            <span className={titleClass}>
              Email:
            </span>
          </Col>
          <Col md={VALUE_LENGTH}>
            <span className={valueClass}>
              {this.props.email}
            </span>
          </Col>
          
        </Row>

        <Row key="isAdmin" className={pastaRowClass}>
          
          <Col md={KEY_LENGTH}>
            <span className={titleClass}>
              Is admin:
            </span>
          </Col>
          <Col md={VALUE_LENGTH}>
            <input type="checkbox" disabled checked={this.props.isAdmin} />
            &nbsp;
            <span className={valueClass}>{this.props.isAdmin ? 'yes' : 'no'}</span>
          </Col>
          
        </Row>
      </div>
    );
  }
}