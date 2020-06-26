var options = []

<% if (options.option1 === true) { %>
  options.push('option 1')
<% } %>

<% if (options.option2 === true) { %>
  options.push('option 2')
<% } %>

<% if (options.language === 'ES') { %>
  options.push('language ES')
<% } %>

const basic = function () {
  return options
}

export default ({ app }, inject) => {
  inject('basic', basic)
}
