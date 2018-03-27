import React, {Component} from 'react';
import '../styles/form.css';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
} from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: null,
      password: null,
      remoteUrl: 'https://api.localhost.5000/api/token',
      token: null,
      userLoggedIn: null,
    };

    // Bind event handler context to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.getSavedToken = this.getSavedToken.bind(this);
  }

  componentWillMount() {
    this.getSavedToken();
  }

  getSavedToken() {
    const jwt = {
      token: localStorage.getItem('token'),
    };
    this.setState(jwt, () => this.isUserLoggedIn());
  }

  isUserLoggedIn() {
    if (localStorage.getItem('token') !== null) {
      fetch(this.state.remoteUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(result => {
          if (result.ok) {
            return result.json();
          } else {
            return {
              username: null,
            };
          }
        })
        .then(u => {
          this.setState({
            userLoggedIn: u.emailAddress,
          });
        });
    } else {
      this.setState({
        userLoggedIn: null,
      });
    }
  }

  // ASDASDASDASASDhandleSubmit = async event => {
  //   event.preventDefault();
  
  //   try {
  //     await Auth.signIn(this.state.email, this.state.password);
  //     this.props.userHasAuthenticated(true);
  //     this.props.history.push("/");
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }
  
  submitUser = (username, password) => {
    let target = `${this.state.remoteUrl}?username=${username}&password=${password}`;

    fetch(target, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(token => token.json())
      .then(t => {
        localStorage.setItem('token', t);
        this.isUserLoggedIn();
      })
      
  };

  logoutUser = () => {
    localStorage.removeItem('token');
    this.setState({
      token: null,
      userLoggedIn: null,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.submitUser();
  };

  handleFormFieldChange = event => {
    event.preventDefault();
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;

    this.setState(stateToChange);
  };

  render() {
    return (
      <div className="row LoginForm">
        <div className="col-md-8 col-md-offset-4">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col
                style={{marginRight: 1 + 'em'}}
                componentClass={ControlLabel}
                sm={2}
              >
                Email
              </Col>
              <Col sm={10}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  required
                  autoComplete
                  autoFocus
                  value={this.state.emailAddress}
                  onChange={this.handleFormFieldChange}
                  id="emailAddress"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col
                style={{marginRight: 1 + 'em'}}
                componentClass={ControlLabel}
                sm={2}
              >
                Password
              </Col>
              <Col sm={10}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleFormFieldChange}
                  id="password"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>;
        </div>
      </div>
    );
  }
}

export default LoginForm;
