'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import UserSignupDialog from './membership/user-signup/dialog'

const strategies = [
  { id: 0, name: 'Facebook' }
]

ReactDOM.render(<UserSignupDialog strategies={strategies} />, document.getElementById('react'))
