'use strict'
import React, {PropTypes} from 'react'
import ScreenReaderOnly from './screen-reader-only'

const style = {
  fontWeight: 'bold'
}

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    for: PropTypes.string.isRequired,
    screenReaderOnly: PropTypes.bool
  },

  defaultProps: function () {
    return {
      screenReaderOnly: false
    }
  },

  render () {
    const label = <label style={style} htmlFor={this.props.for}>{this.props.text}</label>

    if(this.props.screenReaderOnly) {
      return <ScreenReaderOnly>{label}</ScreenReaderOnly>
    }

    return label
  }
})
