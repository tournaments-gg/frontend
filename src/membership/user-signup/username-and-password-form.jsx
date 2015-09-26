'use strict'
import React from 'react'
import TextField from './text-field'
import {Form} from 'formsy-react'

export default React.createClass({
  render () {




    return <Form>
      <TextField name='username' label='Username' />
    </Form>
  }
})
