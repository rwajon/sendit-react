import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';

const Img = ({
  id,
  className,
  src,
  alt,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth
}) => (
  <img
    id={id}
    src={src || placeholder}
    alt={alt}
    className={className}
    style={{ width, height, maxHeight, minHeight, maxWidth, minWidth }}
  />
);

Img.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  height: PropTypes.string
};

Img.defaultProps = {
  alt: 'ímage',
  src: placeholder
};

export default Img;
