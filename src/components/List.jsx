/**
 * barcamp-redux | List.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';
import _ from 'lodash';

let styles = {};

const List = ({ list }) => (
  <ul style={styles.list}>
    {_.map(list, item => <li>{item}</li>)}
  </ul>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

styles = {
  list: {
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'left',
  },
};

export default List;
