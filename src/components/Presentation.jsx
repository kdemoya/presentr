/**
 * presentr | Presentation.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component, PropTypes } from 'react';
import Anime from 'react-anime';
import SimpleSlide from './SimpleSlide';
import ImageSlide from './ImageSlide';
import ListImageSlide from './ListImageSlide';
import ListSlide from './ListSlide';
import CounterSlide from './CounterSlide';
import CodeSlide from './CodeSlide';
import QuoteSlide from './QuoteSlide';
import VideoSlide from './VideoSlide';
import DevTools from '../containers/DevTools';

let styles = {};

class Presentation extends Component {
  /**
   * Generate an object with the slides content styles,
   * based on the current slide type and width.
   *
   * @returns {Object} Style object.
   */
  static getContentStyle({ type, width = '50vw' }) {
    return {
      ...styles.base,
      ...styles[type],
      width,
    };
  }

  componentWillMount() {
    this.goToSlide(1);
    document.addEventListener('keydown', e => this.handleKeyboardEvent(e), false);
  }

  componentWillReceiveProps(newProps) {
    const { step } = newProps;
    localStorage.setItem('CURRENT_SLIDE', step);
  }

  /**
   * Generate an object with the slides container styles.
   *
   * @returns {Object} Objeto de estilo | Style object.
   */
  getContainerStyle() {
    const { background } = this.props.currentSlide;

    return {
      display: 'flex',
      backgroundImage: background && `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${background}')`,
      backgroundSize: 'cover',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100vw',
      height: '100vh',
    };
  }

  /**
   * Navigates to the slide belonging to the received number.
   *
   * @param {Number} slideNumber - Número del slide requerido | Requested slide number.
   */
  goToSlide(slideNumber) {
    const { totalSlides, actions } = this.props;

    if (slideNumber > 0 && slideNumber <= totalSlides) {
      actions.getSlide(slideNumber);
    }
  }

  /**
   * Use arrow keys to navigate through the slides.
   *
   * @param {Object} event - Evento keydown | keydown event.
   */
  handleKeyboardEvent(event) {
    const { step } = this.props;

    if (event.key === 'ArrowRight') {
      this.goToSlide(step + 1);
    } else if (event.key === 'ArrowLeft') {
      this.goToSlide(step - 1);
    }
  }

  /**
   * Returns the component needed to render the current slide,
   * based on its type.
   *
   * @param {Object} currentSlide - Slide actual | Current slide.
   * @returns {Object} Componente React | React component.
   */
  renderSlide(currentSlide) {
    const { counter, actions } = this.props;

    switch (currentSlide.type) {
      case 'simple':
        return <SimpleSlide slide={currentSlide} />;
      case 'image':
        return <ImageSlide slide={currentSlide} />;
      case 'listImage':
        return <ListImageSlide slide={currentSlide} />;
      case 'list':
        return <ListSlide slide={currentSlide} />;
      case 'counter':
        return <CounterSlide counter={counter} actions={actions} />;
      case 'code':
        return <CodeSlide slide={currentSlide} counter={counter} actions={actions} />;
      case 'quote':
        return <QuoteSlide slide={currentSlide} />;
      case 'video':
        return <VideoSlide slide={currentSlide} />;
      default:
        return <div>Oops...</div>;
    }
  }

  /**
   * Part of a React's component lifecycle, this method is called
   * to render our component.
   *
   * @returns {Object} Componente React | React component.
   */
  render() {
    const { currentSlide } = this.props;

    return (
      <div style={this.getContainerStyle()}>
        <DevTools />
        <Anime
          easing="linear"
          duration={125}
          direction="alternate"
          scale={[1, 1.025]}
        >
          <div style={Presentation.getContentStyle(currentSlide)}>
            {this.renderSlide(currentSlide)}
          </div>
        </Anime>
      </div>
    );
  }
}

Presentation.propTypes = {
  currentSlide: PropTypes.shape({
    type: PropTypes.string.isRequired,
    background: PropTypes.string,
    width: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    getSlide: PropTypes.func.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
  }).isRequired,
  totalSlides: PropTypes.number.isRequired,
  counter: PropTypes.number,
  step: PropTypes.number.isRequired,
};

styles = {
  base: {
    margin: '0 auto',
  },
  simple: {
    overflow: 'hidden',
  },
  quote: {
    overflow: 'visible',
  },
};

export default Presentation;
