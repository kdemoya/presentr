/**
 * presentr | CodeSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';
import HighLight from 'react-highlight';
import CounterSlide from './CounterSlide';

let styles = {};

const CodeSlide = ({ slide, actions, counter }) => (
  <div style={styles.codeWrapper}>
    {actions &&
      <div style={styles.counter}>
        <CounterSlide counter={counter} actions={actions} dim={slide.dim} />
      </div>
    }
    <div style={styles.code}>
      <HighLight className="javascript">
        {slide.code}
      </HighLight>
    </div>
  </div>
);

CodeSlide.propTypes = {
  slide: PropTypes.shape({
    dim: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
  }).isRequired,
  counter: PropTypes.number,
};

styles = {
  codeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 24,
  },
  counter: {
    textAlign: 'center',
  },
};

export default CodeSlide;
