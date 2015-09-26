'use strict'
import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    for: PropTypes.string.isRequired
  },

  render () {
    const style = {
      fontWeight: 'bold'
    }

    return <label style={style} htmlFor={this.props.for}>{this.props.text}</label>
  }
})
