import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import './Signup.scss';
import { Button } from '../common';
import { signup } from '../../actions/user';

export class Signup extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      country: '',
      city: '',
      address: ''
    },
    moreFields: 'hidden',
    errors: {},
    loading: false,
    message: ''
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

  toggleMoreFields = () => {
    this.setState(prevState => ({
      ...prevState,
      moreFields: prevState.moreFields === 'hidden' ? 'block' : 'hidden'
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const { signup } = this.props;
    signup(form);
  };

  render = () => {
    const { form, moreFields } = this.state;
    const { loading, errors, message } = this.props;

    return (
      <Layout>
        <div className="Signup">
          <div className="container">
            <div id="user-signup" className="smooth-shadow atm">
              {(errors && errors.message && (
                <div className="message-error add-padding text-center">{errors.message}</div>
              ))
                || (message && (
                  <div className="message-success add-padding text-center">{message}</div>
                ))
                || ''}
              <fieldset>
                <legend>
                  <h1>Sign-up</h1>
                </legend>
                <form onSubmit={this.handleSubmit}>
                  <div className="input input-responsive">
                    <label htmlFor="firstName">
                      First name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={this.handleChange}
                      required={true}
                      minLength={2}
                    />
                  </div>
                  <div className="input input-responsive">
                    <label htmlFor="lastName">
                      Last name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={this.handleChange}
                      required={true}
                      minLength={2}
                    />
                  </div>
                  <div className="input input-responsive">
                    <label htmlFor="userName">
                      Username <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      name="userName"
                      value={form.userName}
                      onChange={this.handleChange}
                      required={true}
                      minLength={2}
                    />
                  </div>
                  <div className="input input-responsive">
                    <label htmlFor="phone">
                      Phone <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={this.handleChange}
                      required={true}
                      placeholder="eg.: +250781122333"
                      minLength={6}
                    />
                  </div>
                  <div className="input input-responsive">
                    <label htmlFor="password">
                      Password <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={this.handleChange}
                      required={true}
                      minLength={4}
                    />
                  </div>
                  <div className="input input-responsive">
                    <label htmlFor="confirmPassword">
                      Confirm Password <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={this.handleChange}
                      required={true}
                      minLength={4}
                    />
                  </div>
                  <div className="abm">
                    <button
                      type="button"
                      className="btn no-bg smooth-shadow"
                      onClick={this.toggleMoreFields}
                    >
                      More <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div id="moreInfo" className={moreFields}>
                    <div className="input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={this.handleChange}
                        minLength={5}
                      />
                    </div>
                    <div className="input input-responsive">
                      <label htmlFor="country">
                        Country <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={form.className}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input input-responsive">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={this.handleChange}
                        minLength={2}
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={this.handleChange}
                        minLength={2}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <Button type="submit" loading={loading}>
                      Sign up
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

Signup.propTypes = {
  loading: PropTypes.bool,
  signup: PropTypes.func,
  errors: PropTypes.object,
  message: PropTypes.string
};

const mapStateToProps = ({ user: { signup: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
