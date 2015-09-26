'use strict'
import React from 'react'
import Label from './label'

export default React.createClass({
  render () {
    return <form>
      <div>
        <Label for='username' text={'Username'} screenReaderOnly={true} />
        <input type='text' name='username' placeholder='Username' />
      </div>

      <div>
        <Label for='password' text={'Password'} screenReaderOnly={true} />
        <input type='password' name='password' placeholder='Password' />
      </div>

      <div>
        <Label for='email' text={'E-Mail'} screenReaderOnly={true} />
        <input type='email' name='email' placeholder='foo@example.com' />
      </div>

      <div>
        <Label for='termsAndConditions' text={'I agree to the terms and conditions'} />
        <input type='checkbox' name='termsAndConditions' />
      </div>
    </form>
  }
})
