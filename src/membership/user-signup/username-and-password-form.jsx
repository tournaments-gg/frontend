'use strict'
import React from 'react'

export default React.createClass({
  render () {
    return <form>
      <label htmlFor='username'>Username</label>
      <input type='text' name='username' />

      <label htmlFor='password'>Password</label>
      <input type='password' name='password' />

      <label htmlFor='email'>E-Mail</label>
      <input type='email' name='email' />

      <label htmlFor='termsAndConditions'>I agree to the terms and conditions</label>
      <input type='checkbox' name='termsAndConditions' />
    </form>
  }
})
