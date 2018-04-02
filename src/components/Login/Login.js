import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import './Login.css';

export default class Login extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  emailChange({target}) {
    this.setState({
      email: target.value
    });
  }

  passwordChange({target}) {
    this.setState({
      password: target.value
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const {email, password} = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <form className="login-form"
            onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>Email:</ControlLabel>
            <FormControl autoFocus
                         type="email"
                         onChange={this.emailChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password:</ControlLabel>
            <FormControl type="password"
                        onChange={this.passwordChange} />
          </FormGroup>
        <Button type="submit" bsStyle="success">Login</Button>
      </form>
    );
  }
}