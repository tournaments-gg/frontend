'use strict'
import Dialog from './dialog'
import {expect} from 'chai'
import shallowRender from '../../test-utils/shallow-render'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

describe('user signup dialog', function () {
  it('should display OAuth strategies', function () {
    const strategy = { name: 'OAuth Provider' }
    const strategies = [strategy]
    const dialog = shallowRender(Dialog, { strategies: strategies })

    expect(dialog.props.children).to.deep.equal([<button>{strategy.name}</button>])
  })
})
