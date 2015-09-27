'use strict'
import assert from 'assert'
import Form from './form'
import shallowRender from '../../test-utils/shallow-render'

describe('user signup form', function () {
  it('should render a form', function () {
    const component = shallowRender(Form)

    assert.equal(component.type, 'form')
  })
})
