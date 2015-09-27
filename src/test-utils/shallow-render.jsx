'use strict'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

export default function shallowRender(element) {
  const renderer = TestUtils.createRenderer()
  renderer.render(element)
  return renderer.getRenderOutput()
}
