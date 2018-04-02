import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Backendless from 'backendless';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import bem from '../../services/bem';
import Loader from '../common/Loader';

import './PastaList.css';

const BLOCK_CLASS = 'pasta-list';

export default class PastaList extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    showError: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      pastas: [],
      isLoading: true
    };

    this.fetchPastas = this.fetchPastas.bind(this);
    this.renderPastas = this.renderPastas.bind(this);
    this.renderNoPastas = this.renderNoPastas.bind(this);

    if (props.isAuthenticated) {
      this.fetchPastas();
    }
  }

  componentWillReceiveProps({isAuthenticated}) {
    if (!this.props.isAuthenticated && isAuthenticated) {
      this.fetchPastas();
    }
  }

  fetchPastas() {
    this.setState({
      isLoading: true
    });

    Backendless.Data
      .of('Pastas')
      .find()
      .then((pastas) => {
        this.setState({
          pastas,
          isLoading: false
        })
      })
      .catch((e) => {
        console.log(e);
        this.props.showError('Can\'t show pastas', 'Server error, please try again later');
        this.setState({
          isLoading: false
        });
      });
  }

  renderPastas() {
    return (
      <div>
        <h1 className={bem(BLOCK_CLASS, 'list-header')}>
          Recent pastas
        </h1>
        <ul className={bem(BLOCK_CLASS, 'list')}>
          {this.state.pastas.map(({name, objectId, text}) => (
            <li key={objectId}>
              <h4 className={bem(BLOCK_CLASS, 'pasta-name')}>{name}</h4>
              <div className={bem(BLOCK_CLASS, 'pasta-text')}>
                {text}
                <div className={bem(BLOCK_CLASS, 'shadow')} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderNoPastas() {
    return (
      <div className={bem(BLOCK_CLASS, 'no-pasta')}>
        <h1>
          :(
        </h1>
        <span>
          There are no pastas assigned to your account, create a new one?
        </span>
      </div>
    );
  }

  render() {
    return (
      <Loader isLoading={this.state.isLoading}>
        <Row className={bem(BLOCK_CLASS)}>
          <Col md={12}>
            {this.state.pastas.length ? this.renderPastas() : this.renderNoPastas()}
          </Col>
        </Row>
      </Loader>
    );
  }
}
