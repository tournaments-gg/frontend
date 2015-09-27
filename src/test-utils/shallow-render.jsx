'use strict'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

export default function shallowRender(componentClass, props) {
  const renderer = TestUtils.createRenderer()
  const element = React.createElement(componentClass, props)
  renderer.render(element)
  return renderer.getRenderOutput()
}
