/**
 * presentr | ImageSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

let styles = {};

const ImageSlide = (props) => {
  const { image, header, subHeader, headerFit } = props.slide;

  return (
    <div>
      <img style={styles.image} src={image} alt="" />
      {header && <Header fit={headerFit}>{header}</Header>}
      {subHeader && <SubHeader>{subHeader}</SubHeader>}
    </div>
  );
};

ImageSlide.propTypes = {
  slide: PropTypes.shape({
    header: PropTypes.string,
    subHeader: PropTypes.string,
    image: PropTypes.string.isRequired,
    headerFit: PropTypes.bool,
  }).isRequired,
};

styles = {
  image: {
    maxWidth: '100%',
    maxHeight: '510px',
    marginBottom: '20px',
  },
};

export default ImageSlide;
