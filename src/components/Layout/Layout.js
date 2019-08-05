import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

export class Layout extends Component {
  state = { style: { minHeight: window.innerHeight, width: '100%', marginTop: '-14px' } };

  componentDidMount = () => {
    window.addEventListener('resize', () => this.setState(prevState => ({
      ...prevState,
      style: { ...prevState.state, minHeight: window.innerHeight }
    })));
  };

  componentWillUnmount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { style } = this.state;
    const { children } = this.props;
    return (
      <div className="Layout">
        <Header />
        <section id="section" style={style}>
          {children}
        </section>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = { children: PropTypes.any };

export default connect(null)(Layout);
