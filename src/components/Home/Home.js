import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import './Home.scss';
import { Img } from '../common';
import deliveryImg from '../../assets/images/delivery.png';

const Home = () => (
  <Layout>
    <div className="Home">
      <div className="container">
        <div className="text-center abp abm">
          <h1>Welcome to SendIT</h1>
          <p>
            SendIT is a courier service that helps users deliver parcels to different destinations.
            SendIT provides courier quotes based on weight categories.
          </p>
        </div>
        <div className="text-center atp abp abm">
          <Link to="/signup" className="signup">
            Sign up
          </Link>
          <br />
          <br /> OR <br />
          <br />
          <Link to="/signin" className="signin">
            Sign in
          </Link>
        </div>
        <div className="text-center">
          <Img className="img-responsive" src={deliveryImg} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
