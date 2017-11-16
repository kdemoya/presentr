/**
 * presentr | SimpleSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Header from './Header';
import SubHeader from './SubHeader';

class SimpleSlide extends Component {
  /**
   * Returns one or several Header components with the received text.
   *
   * @param {Text|Array<Text>} header - Header's text(s).
   * @param {Boolean} fit             - Fill container size?
   * @returns {Object} React component.
   */
  static renderHeader(header, fit) {
    if (_.isArray(header)) {
      return _.map(header, singleHeader => (
        <Header fit={fit}>{singleHeader}</Header>
      ));
    }

    return <Header fit={fit}>{header}</Header>;
  }

  render() {
    const { header, subHeader, headerFit } = this.props.slide;

    return (
      <div>
        {SimpleSlide.renderHeader(header, headerFit)}
        {subHeader && <SubHeader>{subHeader}</SubHeader>}
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  slide: PropTypes.shape({
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]).isRequired,
    subHeader: PropTypes.string,
    headerFit: PropTypes.bool,
  }).isRequired,
};

export default SimpleSlide;
