import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Img } from '../common';
import senditLogo from '../../assets/images/sendit.png';
import userImg from '../../assets/images/user.jpg';
import './Header.scss';

class Header extends Component {
  render() {
    const { isAuth, profile } = this.props;

    return (
      <header className="Header">
        <div className="container">
          <Link to="/">
            <Img id="logo-top" src={senditLogo} />
          </Link>
          {isAuth ? (
            <Link id="user-top" to="/profile">
              <b>{profile.userName}</b> <Img id="top-user-picture" src={userImg} />
            </Link>
          ) : (
            <Link id="user-top" to="/signin">
              <b>Sign in</b> <Img id="top-user-picture" src={userImg} />
            </Link>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = { isAuth: PropTypes.bool, profile: PropTypes.object };

const mapStateToProps = ({ user: { isAuth, profile } }) => ({ isAuth, profile });

export default connect(mapStateToProps)(Header);
