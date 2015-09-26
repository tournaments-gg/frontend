'use strict'
import React from 'react'
import Label from './label'

export default React.createClass({
  render () {
    return <form>
      <div>
        <Label for='username' text={'Username'}/>
        <input type='text' name='username' />
      </div>

      <div>
        <Label for='password' text={'Password'} />
        <input type='password' name='password' />
      </div>

      <div>
        <Label for='email' text={'E-Mail'} />
        <input type='email' name='email' />
      </div>

      <div>
        <Label for='termsAndConditions' text={'I agree to the terms and conditions'} />
        <input type='checkbox' name='termsAndConditions' />
      </div>
    </form>
  }
})
