'use strict'
import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    strategies: PropTypes.array.isRequired
  },

  render () {
    return <div>
      {this.props.strategies.map((strategy) => <button key={strategy.id}>{strategy.name}</button>)}
    </div>
  }
})
