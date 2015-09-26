'use strict'
import React, {PropTypes} from 'react'
import UsernameAndPasswordForm from './username-and-password-form'

export default React.createClass({
  propTypes: {
    strategies: PropTypes.array.isRequired
  },

  render () {
    return <section>
      <h1>Sign Up</h1>
      <UsernameAndPasswordForm />
      <div>
        <p>Alternatively, you can sign up using one of the following providers:</p>
        {this.props.strategies.map((strategy) => <button key={strategy.id}>{strategy.name}</button>)}
      </div>
    </section>
  }
})
