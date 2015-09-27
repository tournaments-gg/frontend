'use strict'

module.exports = {
  url: function () {
    return this.api.launchUrl + '/membership/sign-up'
  },

  elements: {
    username: {
      selector: 'input[name="username"]'
    },
    password: {
      selector: 'input[name="password"]'
    },
    confirmPassword: {
      selector: 'input[name="confirmPassword"]'
    },
    email: {
      selector: 'input[name="email"]'
    },
    submit: {
      selector: 'input[type="submit"]'
    }
  }
}
