'use strict'
import React from 'react'
import formsyfy from './formsyfy'
import {Form} from 'formsy-react'
import assert from 'assert'
import shallowRender from '../test-utils/shallow-render'

describe('formsyfy', function () {
  it('should wrap elements from input component into formsy element', function () {
    const inputs = [
      <input key={0} type='text' name='exampleInput' />,
      <input key={1} type='password' name='examplePassword' />
    ]
    const inputComponent = <form>{inputs}</form>
    const component = formsyfy(inputComponent)

    const renderedComponent = shallowRender(component)

    assert.deepEqual(renderedComponent.props.children, inputs)
  })
})