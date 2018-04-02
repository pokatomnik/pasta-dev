import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';
import Card from '../common/Card';
import bem from '../../services/bem';

import './PastaForm.css';

const BLOCK_CLASS = 'pasta-form';

class PastaForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      encrypted: false,
      key: '',
    };

    this.nameChange = this.nameChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.ecryptedChange = this.encryptedChange.bind(this);
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  nameChange({target}) {
    console.log(target.value);
    this.setState({
      name: target.value
    });
  }

  textChange({target}) {
    this.setState({
      text: target.value
    });
  }

  encryptedChange({target}) {
    this.setState({
      encrypted: target.checked
    });
  }

  onKeyChange({target}) {
    this.setState({
      key: target.value
    });
  }

  render() {
    return (
      <Row>
        <Col md={9}>
          <Card>
            <Form>
              <input className={bem(BLOCK_CLASS, 'invisible')} />
              <input type="password" className={bem(BLOCK_CLASS, 'invisible')}/>
              <h1>
                New pasta
              </h1>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl value={this.state.name}
                             autoComplete="off"
                             onChange={this.nameChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Text</ControlLabel>
                <FormControl componentClass="textarea"
                             rows={10}
                             className={bem(BLOCK_CLASS, 'textarea')}
                             value={this.state.text}
                             autoComplete="off"
                             onChange={this.textChange} />
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <input type="checkbox"
                           checked={this.state.encrypted}
                           autoComplete="off"
                           onChange={this.ecryptedChange}/>
                  </InputGroup.Addon>
                  <InputGroup.Addon>
                    <span className={bem(BLOCK_CLASS, 'encrypted-state')}>
                      {this.state.encrypted ? 'Encrypted' : 'Not encrypted'}
                    </span>
                  </InputGroup.Addon>
                  <FormControl type="password"
                               value={this.state.key}
                               autoComplete="off"
                               onChange={this.onKeyChange} />
                  <InputGroup.Button>
                    <Button bsStyle="success">Create</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Form>
          </Card>
        </Col>
        <Col md={3}>

        </Col>
      </Row>
    )
  }
}

export default PastaForm;
