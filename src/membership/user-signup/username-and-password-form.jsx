'use strict'
import React from 'react'
import Field from './field'
import Checkbox from './checkbox'
import {Form} from 'formsy-react'

export default React.createClass({
  render () {




    // TODO: Add a link to the T&C?
    return <Form>
      <Field type='text' name='username' label='Username' />
      <Field type='email' name='email' label='E-Mail' />
      <Field type='password' name='password' label='Password' />
      <Checkbox name='tAndC' text='I agree to the terms and conditions.' />
    </Form>
  }
})
