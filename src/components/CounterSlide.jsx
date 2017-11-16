/**
 * presentr | CounterSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component, PropTypes } from 'react';

let styles = {};

class CounterSlide extends Component {

  /**
   * Handles the click event of the buttons in our counter,
   * and decides if the counter should increase or decrease.
   *
   * @param {String} type - Action to execute.
   */
  handleClick(type) {
    const { actions } = this.props;

    switch (type) {
      case 'increase':
        actions.increaseCounter();
        return;
      case 'decrease':
        actions.decreaseCounter();
        return;
      default:
        return;
    }
  }

  render() {
    const { counter, dim } = this.props;

    return (
      <div style={dim === 'both' ? styles.dim : {}}>
        <span style={Object.assign({}, styles.number, dim === 'counter' ? styles.dim : {})}>
          {counter}
        </span>
        <div style={dim === 'controls' ? styles.dim : {}}>
          <button style={styles.button} onClick={() => this.handleClick('increase')}>+</button>
          <button style={styles.button} onClick={() => this.handleClick('decrease')}>-</button>
        </div>
      </div>
    );
  }
}

CounterSlide.propTypes = {
  actions: PropTypes.shape({
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
  }).isRequired,
  counter: React.PropTypes.number.isRequired,
  dim: React.PropTypes.string,
};

styles = {
  dim: {
    opacity: 0.4,
  },
  number: {
    display: 'block',
    fontSize: '50vh',
    lineHeight: '40vh',
    color: '#ffffff',
  },
  button: {
    width: '100px',
    height: '40px',
    border: '0',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    fontSize: 30,
    paddingTop: 0,
    margin: '0 5px',
    outline: 'none',
  },
};

export default CounterSlide;
