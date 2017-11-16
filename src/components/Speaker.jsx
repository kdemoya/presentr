/**
 * barcamp-redux | Speaker.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component, PropTypes } from 'react';
import Anime from 'react-anime';

let styles = {};

class Speaker extends Component {
  componentWillMount() {
    window.addEventListener('storage', e => this.handleSlideChange(e));
  }


  /**
   * Handles the changes of the browser's local storage,
   * which are triggered by out main component (Presentation.jsx),
   * updates the current state based on the last value saved to the local storage.
   *
   * @param {String} event - Local storage's slide.
   */
  handleSlideChange(event) {
    const { actions } = this.props;
    const { newValue } = event;

    actions.getSlide(parseInt(newValue, 10));
  }

  render() {
    const { currentSlide, step, totalSlides } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.text}>
          <Anime
            easing="linear"
            duration={125}
            direction="alternate"
            scale={[1, 1.025]}
          >
            <span style={styles.progress}>{ step }/{ totalSlides }</span>
            <div style={styles.notes}>{ currentSlide.notes || 'There are no notes for this slide.' }</div>
          </Anime>
        </div>
      </div>
    );
  }
}

Speaker.propTypes = {
  currentSlide: PropTypes.shape({
    notes: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    getSlide: PropTypes.func.isRequired,
  }).isRequired,
  totalSlides: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#011627',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 72,
  },
  notes: {
    fontSize: 24,
    margin: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    width: '50vw',
    padding: '30px',
    borderTop: '1px solid #FFFFFF',
    borderBottom: '1px solid #FFFFFF',
  },
  progress: {
    position: 'absolute',
    right: 50,
    top: 50,
  },
};

export default Speaker;
