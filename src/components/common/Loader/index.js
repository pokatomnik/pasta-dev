import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Loader.css';
import loader from '../../../assets/loader.svg';

const BLOCK_CLASS = 'loader';

const loaderStyle = {
  backgroundImage: `url('${loader}')`
}

export default class Loader extends PureComponent {
  static defaultProps = {
    isLoading: false
  }

  static propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.any
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div style={loaderStyle} className={BLOCK_CLASS} />
      );
    }
    return this.props.children;
  }
}