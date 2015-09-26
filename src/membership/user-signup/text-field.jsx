'use strict'
import React, {PropTypes} from 'react'
import {Mixin} from 'formsy-react'
import Label from './label'

export default React.createClass({
  propTypes: {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  },
  mixins: [Mixin],
  render () {
    return <div>
      <Label for={this.props.name} text={this.props.label} screenReaderOnly />
      <input type='text' name={this.props.name} value={this.getValue()} placeholder={this.props.label} />
    </div>
  }
})
