/**
 * presentr | slides.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import { GET_SLIDE, INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/slide';

/**
 * Finds the next slide to show, based on requested slide number.
 *
 * @param {Object} state       - App's current state.
 * @param {String} slideNumber - Requested slide number.
 * @returns {Object} Returns the correct slide.
 */
function getSlide(state, slideNumber) {
  const slideKey = `slide${slideNumber}`;
  const requestedSlide = state.slides[slideKey];

  if (!requestedSlide) {
    console.err(`${slideKey} not found.`);
    return state;
  }

  return { ...state, currentSlide: requestedSlide, step: slideNumber };
}


/**
 * Reducer - this part is in charge of changing the global state
 * of our app whenever we fire a Redux action.
 *
 * @param {Object} state  - App's current state.
 * @param {String} action - Fired action.
 * @returns {Object} Returns the app's new state.
 */
export default function slides(state, action) {
  switch (action.type) {
    case GET_SLIDE:
      return getSlide(state, action.slideNumber);
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
