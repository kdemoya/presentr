/**
 * barcamp-redux | Header.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  /**
   * Part of a React's component lifecycle, this method is called
   * just after our component renders.
   */
  componentDidMount() {
    this.resizeText();
    window.addEventListener('resize', this.resizeText());
  }


  /**
   * Generate an object with our header styles.
   *
   * @returns {Object} Style object.
   */
  getHeaderStyle() {
    const { scale } = this.state;
    const { fit } = this.props;

    return {
      color: '#FBFFFE',
      fontSize: !fit ? 80 : 22,
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',
      margin: '0',
      transform: !fit ? 'scale(1)' : `scale(${scale})`,
      transformOrigin: 'center top',
    };
  }


  /**
   * Generate an object with the header container styles.
   *
   * @returns {Object} Objeto de estilo | Style object.
   */
  getContainerStyle() {
    const { height } = this.state;

    return {
      display: 'block',
      width: '100%',
      height,
    };
  }


  /**
   * Adjust text size based on "fit" prop.
   */
  resizeText() {
    const { fit } = this.props;

    if (!fit) {
      return;
    }

    const textRef = this.text;
    const containerRef = this.container;
    textRef.style.display = 'inline-block';
    const scale = (containerRef.offsetWidth / textRef.offsetWidth);
    const height = textRef.offsetHeight * scale;
    textRef.style.display = 'block';

    this.setState({ scale, height });
  }

  render() {
    const { children } = this.props;

    return (
      <div style={this.getContainerStyle()} ref={(c) => { this.container = c; }}>
        <h1 style={this.getHeaderStyle()} ref={(c) => { this.text = c; }}>{children}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  fit: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

export default Header;
