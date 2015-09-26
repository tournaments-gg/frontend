'use strict'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

// Don't really need to create renderers per instance (right?)
const renderer = TestUtils.createRenderer()
export default function shallowRender(componentClass) {
  const element = React.createElement(componentClass)
  renderer.render(element)
  return renderer.getRenderOutput()
}
