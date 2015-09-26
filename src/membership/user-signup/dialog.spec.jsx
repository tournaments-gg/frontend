'use strict'
import Dialog from './dialog'
import {expect} from 'chai'
import shallowRender from '../../test-utils/shallow-render'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import uniqueId from 'lodash.uniqueid'

describe('user signup dialog', function () {
  it('should display OAuth strategies', function () {
    const strategy = { id: uniqueId(), name: 'OAuth Provider' }
    const strategies = [strategy]
    const dialog = shallowRender(Dialog, { strategies: strategies })

    expect(dialog.props.children).to.deep.equal([<button key={strategy.id}>{strategy.name}</button>])
  })
})
