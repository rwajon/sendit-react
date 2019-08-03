import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import './Signin.scss';
import { Button } from '../common';
import { signin } from '../../actions/user';

export class Signin extends Component {
  state = {
    errors: {},
    loading: false,
    message: '',
    form: {
      userName: '',
      password: ''
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors } = this.state;
    this.setState({
      message: nextProps.message,
      errors: { ...errors, ...nextProps.errors }
    });

    return nextProps.message && this.setState({ form: {} });
  };

  handleChange = (e) => {
    const form = { [e.target.name]: e.target.value };

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        ...form
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { form } = this.state;
    const { signin } = this.props;
    signin(form);
  };

  render = () => {
    const { form } = this.state;
    const { loading, errors, message } = this.props;

    return (
      <Layout>
        <div className="Signin">
          <div className="container">
            <div id="user-signin" className="smooth-shadow atm">
              {(errors && errors.message && (
                <div className="message-error add-padding text-center">{errors.message}</div>
              ))
                || (message && (
                  <div className="message-success add-padding text-center">{message}</div>
                ))
                || ''}
              <fieldset>
                <legend>
                  <h1>Sign-in</h1>
                </legend>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={form.userName}
                    required="required"
                    onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    required="required"
                    onChange={this.handleChange}
                  />
                  <br />
                  <div className="text-center">
                    <Button type="submit" loading={loading}>
                      Sign in
                    </Button>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
}

Signin.propTypes = {
  loading: PropTypes.bool,
  signin: PropTypes.func,
  errors: PropTypes.object,
  message: PropTypes.string
};

const mapStateToProps = ({ user: { signin: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { signin }
)(Signin);
