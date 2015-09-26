'use strict'
import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    strategies: PropTypes.array.isRequired
  },

  render () {
    return <section>
      <h1>Sign Up</h1>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <label htmlFor="email">E-Mail</label>
        <input type="email" name="email" />

        <label htmlFor="termsAndConditions">I agree to the terms and conditions</label>
        <input type="checkbox" name="termsAndConditions" />
      </form>

      <div>
        <p>Alternatively, you can sign up using one of the following providers:</p>
        {this.props.strategies.map((strategy) => <button key={strategy.id}>{strategy.name}</button>)}
      </div>
    </section>
  }
})
