'use strict'
import React from 'react'
import Field from './field'
import Checkbox from './checkbox'
import {Form} from 'formsy-react'

export default React.createClass({
  getInitialState () {
    return {
      submitDisabled: true
    }
  },

  render () {
    // TODO: Add a link to the T&C?
    return <Form onSubmit={this.submit} onValid={this.enableSubmit} onInvalid={this.disableSubmit} noValidate>
      <Field type='text' name='username' label='Username' />
      <Field type='password'
        name='password'
        label='Password'
        validations='minLength:8'
        required />
      <Field type='password'
        name='confirmPassword'
        label='Confirm Password'
        validations='equalsField:password'
        required />
      <Field type='email' name='email' label='E-Mail' validations='isEmail' required />
      <Checkbox name='tAndC' text='I agree to the terms and conditions.' validations='isTrue' required />
      <input type='submit' value='Sign Up' disabled={this.state.submitDisabled} />
    </Form>
  },

  enableSubmit () {
    this.setState({ submitDisabled: false })
  },

  disableSubmit () {
    this.setState({ submitDisabled: true })
  }
})
