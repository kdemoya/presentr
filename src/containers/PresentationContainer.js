/**
 * barcamp-redux | PresentationContainer.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as slideActions from '../actions/slide';

function mapStateToProps(state) {
  return {
    currentSlide: state.currentSlide,
    totalSlides: state.totalSlides,
    step: state.step,
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(slideActions, dispatch),
  };
}

const container = Component => (
  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component))
);

export default container;

