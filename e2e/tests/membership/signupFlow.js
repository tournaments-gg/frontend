'use strict'

module.exports = {
  'should prevent form submission all fields empty': function (client) {
    var page = client.page.signupPage()

    page.navigate()
      .setValue('@username', '')
      .setValue('@password', '')
      .setValue('@confirmPassword', '')
      .setValue('@email', '')
      .assert.attributeEquals('@submit', 'disabled', true)

    client.end()
  }
}
