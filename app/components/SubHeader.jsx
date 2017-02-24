/**
 * barcamp-redux | SubHeader.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';

let styles = {};

const SubHeader = ({ children }) => (
  <h2 style={styles.subHeader}>{children}</h2>
);

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

styles = {
  subHeader: {
    color: '#FBFFFE',
    fontSize: '40px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    margin: '0',
  },
};

export default SubHeader;
