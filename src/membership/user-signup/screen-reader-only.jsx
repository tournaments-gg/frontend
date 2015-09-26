'use strict'
import React, {PropTypes, Children} from 'react'
import Radium from 'radium'

const style = {
  '@media not speech': {
    display: 'none'
  }
}

const ScreenReaderOnly = React.createClass({
  render () {
    const child = Children.only(this.props.children)
    // Is span really the best element here?
    // Its likely that we are only touching phrasing content, which is permissible.
    return <span style={style}>{child}</span>
  }
})

export default Radium(ScreenReaderOnly)
