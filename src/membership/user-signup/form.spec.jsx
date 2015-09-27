'use strict'
import React from 'react'
import assert from 'assert'
import Form from './form'
import shallowRender from '../../test-utils/shallow-render'

describe('user signup form', function () {
  it('should render a form', function () {
    const component = shallowRender(Form)

    assert.equal(component.type, 'form')
  })

  it('should be POSTed', function () {
    const component = shallowRender(Form)

    assert.equal(component.props.method, 'POST')
  })

  it('should render fields', function () {
    const component = shallowRender(Form)

    assert.deepEqual(component.props.children, [
      <input name='username' type='text' />,
      <input name='password' type='password' />,
      <input name='confirmPassword' type='password' />,
      <input name='email' type='email' />,
      <input type='submit' />
    ])
  })
})
