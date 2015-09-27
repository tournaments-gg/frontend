'use strict'
import React from 'react'

export default React.createClass({
  displayName: 'UserSignupForm',
  render () {
    return <form method='POST'>
      <input name='username' type='text' />
      <input name='password' type='password' />
      <input name='confirmPassword' type='password' />
      <input name='email' type='email' />
      <input type='submit' />
    </form>
  }
})
