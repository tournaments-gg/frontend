'use strict'
import React from 'react'

export default React.createClass({
  render () {
    return <form>
      <div>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
      </div>

      <div>
        <label htmlFor='email'>E-Mail</label>
        <input type='email' name='email' />
      </div>

      <div>
        <label htmlFor='termsAndConditions'>I agree to the terms and conditions</label>
        <input type='checkbox' name='termsAndConditions' />
      </div>
    </form>
  }
})
