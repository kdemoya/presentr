/**
 * barcamp-redux | VideoSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';

let styles = {};

const VideoSlide = (props) => {
  const { source } = props.slide;

  return (
    <video controls style={styles.video}>
      <source src={source} type="video/mp4" />
    </video>
  );
};

styles = {
  video: {
    maxHeight: '95vh',
  },
};

VideoSlide.propTypes = {
  slide: PropTypes.shape({
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoSlide;
