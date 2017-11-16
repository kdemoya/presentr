/**
 * presentr | App.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import * as slidesReducer from './reducers/slides';
import container from './containers/PresentationContainer';
import Presentation from './components/Presentation';
import Speaker from './components/Speaker';
import DevTools from './containers/DevTools';

require('../node_modules/highlight.js/styles/monokai.css');

const App = ({ slides }) => {
  const preloadedState = {
    slides: slides,
    currentSlide: slides.slide1,
    step: 1,
    totalSlides: Object.keys(slides).length,
    counter: 0,
  };

  const store = createStore(slidesReducer.default, preloadedState, DevTools.instrument());

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/speaker" component={container(Speaker)}/>
        <Route path="/" component={container(Presentation)}/>
      </Router>
    </Provider>
  )
};

export default App;
