/**
 * presentr | ListImageSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { PropTypes } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import List from './List';

let styles = {};

const ListImageSlide = (props) => {
  const { header, subHeader, image, headerFit, list } = props.slide;

  return (
    <div>
      { header && <Header fit={headerFit}>{header}</Header> }
      { subHeader && <SubHeader>{subHeader}</SubHeader> }
      <div style={styles.wrapper}>
        <div>
          <img style={styles.image} src={image} alt="" />
        </div>
        <div style={styles.listWrapper}>
          <List list={list} />
        </div>
      </div>
    </div>
  );
};

ListImageSlide.propTypes = {
  slide: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    headerFit: PropTypes.bool,
    list: PropTypes.array,
  }).isRequired,
};

styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    marginTop: '40px',
  },
  image: {
    maxWidth: '380px',
  },
  listWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignSelf: 'center',
    marginLeft: '40px',
  },
};

export default ListImageSlide;
