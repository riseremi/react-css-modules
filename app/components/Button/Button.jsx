import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Button.styl';

/**
* Simple brand button.
*/
const Button = props => <button styleName="button">{props.text}</button>;

Button.propTypes = {
  text: PropTypes.string,
};

export default CSSModules(Button, styles);
