/**
 * barcamp-redux | slide.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

export const GET_SLIDE = 'GET_SLIDE';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';


/**
 * Fires a "GET_SLIDE" action.
 *
 * @param {Number} slideNumber - Requested slide.
 * @returns {Object} Redux action.
 */
export function getSlide(slideNumber) {
  return {
    type: GET_SLIDE,
    slideNumber,
  };
}


/**
 * Fires a "INCREASE_COUNTER" action.
 *
 * @returns {Object} Redux action.
 */
export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}


/**
 * Fires a "DECREASE_COUNTER" action.
 *
 * @returns {Object} Redux action.
 */
export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
  };
}
