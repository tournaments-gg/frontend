'use strict'
import React, {PropTypes} from 'react'
import {Mixin} from 'formsy-react'

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  },
  mixins: [Mixin],
  render () {
    return <div>
      <input type='checkbox' name={this.props.name} onChange={this.onChange} value={this.getValue()} />
      {this.props.text}
    </div>
  },

  onChange (event) {
    this.setValue(event.currentTarget.checked)
  }
})
