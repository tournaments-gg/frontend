'use strict'
import React from 'react'
import Field from './field'
import {Form} from 'formsy-react'

export default React.createClass({
  render () {




    return <Form>
      <Field type='text' name='username' label='Username' />
      <Field type='email' name='email' label='E-Mail' />
      <Field type='password' name='password' label='Password' />
    </Form>
  }
})
