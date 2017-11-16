/**
 * barcamp-redux | ListSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';
import Header from './Header';
import List from './List';

const ListSlide = (props) => {
  const { header, list } = props.slide;

  return (
    <div>
      { header && <Header>{header}</Header>}
      <List list={list} />
    </div>
  );
};

ListSlide.propTypes = {
  slide: PropTypes.shape({
    header: PropTypes.string.isRequired,
    list: PropTypes.array,
  }).isRequired,
};

export default ListSlide;
