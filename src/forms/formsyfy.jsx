'use strict'
import React from 'react'
import {Form} from 'formsy-react'

/**
 * Strips the given component of its children and wraps them in a Formsy Form instead. The use case for this
 * is simply that all forms that use Formsy must have their input at the root of the form (or in a container div),
 * but its nigh-on impossible to test the basic logic of the underlying form (for example, the button being disabled if
 * a prop is set).
 *
 * In order to combat this, we merge the input form component with a Formsy form. Simple!
 * @param  {ReactElement}
 * @return {ReactElement}
 */
export default function formsify (component) {
  return <Form>
    {component.props.children}
  </Form>
}
