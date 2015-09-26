'use strict'
import React from 'react'
import Label from './label'

export default React.createClass({
  render () {
    return <form>
      <div>
        <Label for='username' text='Username' screenReaderOnly />
        <input type='text' name='username' placeholder='Username' />
      </div>

      <div>
        <Label for='password' text='Password' screenReaderOnly />
        <input type='password' name='password' placeholder='Password' />
      </div>

      <div>
        <Label for='email' text='E-Mail' screenReaderOnly />
        <input type='email' name='email' placeholder='foo@example.com' />
      </div>

      <div>
        <Label for='termsAndConditions' text={'I agree to the terms and conditions'} />
        <input type='checkbox' name='termsAndConditions' />
      </div>

      <input type="submit" value="Sign Up"/>
    </form>
  }
})
