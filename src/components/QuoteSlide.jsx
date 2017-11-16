/**
 * barcamp-redux | QuoteSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';

let styles = {};

const QuoteSlide = (props) => {
  const { image, quote, author } = props.slide;

  return (
    <div>
      <div style={styles.wrapper}>
        <div style={styles.quote}>
          { image && <img style={styles.image} src={image} alt="" /> }
          “{quote}”
          <div style={styles.author}>
            - {author}
          </div>
        </div>
      </div>
    </div>
  );
};

QuoteSlide.propTypes = {
  slide: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

styles = {
  image: {
    maxWidth: '200px',
    borderRadius: '100px',
    position: 'absolute',
    top: '-147px',
    left: '40%',
  },
  quote: {
    backgroundColor: '#ffd8dd',
    fontSize: '40px',
    fontFamily: 'sans-serif',
    maxWidth: '50vw',
    margin: '0 auto',
    padding: '60px 80px',
    borderRadius: '15px',
    position: 'relative',
    color: '#e71d36',
  },
  author: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontStyle: 'italic',
    fontSize: '18px',
  },
};

export default QuoteSlide;
