'use strict'
import React from 'react'
import formsyfy from './formsyfy'
import {Form} from 'formsy-react'
import assert from 'assert'
import shallowRender from '../test-utils/shallow-render'

describe('formsyfy', function () {
  it('should wrap classes into formsy class', function () {
    const inputs = [
      <input key={0} type='text' name='exampleInput' />,
      <input key={1} type='password' name='examplePassword' />
    ]
    const InputComponent = React.createClass({
      render() {
        return <form>{inputs}</form>
      }
    })
    const FormsyfiedComponent = formsyfy(InputComponent)

    const renderedComponent = shallowRender(<FormsyfiedComponent />)

    assert.deepEqual(renderedComponent.props.children, InputComponent)
  })
})