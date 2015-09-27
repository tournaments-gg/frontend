'use strict'

module.exports = {
  'should prevent form submission all fields empty': function (client) {
    var page = client.pages.signupPage()

    page.navigate()
      .setValue('@username', '')
      .setValue('@password', '')
      .setValue('@confirmPassword', '')
      .setValue('@email', '')
      .assert.disabled('@submit')

    client.end()
  }
}
