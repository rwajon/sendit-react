import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <div className="Footer">
    <div className="text-center atp abp">
      <Link to="#" className="btn">
        About
      </Link>
      <Link to="#" className="btn">
        Contact us
      </Link>
      <Link to="#" className="btn">
        Help & Info
      </Link>
    </div>
    <hr style={{ border: 'solid 0.5px turquoise' }} />
    <div className="text-center">
      <p className="alm">Copyright &copy; {year} SendIT</p>
    </div>
  </div>
);

export default Footer;
