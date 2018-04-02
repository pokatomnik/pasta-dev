import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import bem from '../../../services/bem';

import './Card.css';

const BLOCK_CLASS = 'card';

export default class Card extends PureComponent {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div className={BLOCK_CLASS}>
        <div className={bem(BLOCK_CLASS, 'card-content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
