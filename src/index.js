/**
 * presentr | index.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

exports.presentr = (elemId, slides, color) => {
  if (elemId && slides) {
    document.body.style.cssText = `background-color: ${color || '#E71D36'}; margin: 0; overflow: hidden`;
    return ReactDOM.render(<App slides={slides} />, document.getElementById(elemId));
  }

  if (!elemId) throw "You need to specify an element id.";
  if (!slides || slides.length === 0) throw "You need to specify at least one slide.";
};
