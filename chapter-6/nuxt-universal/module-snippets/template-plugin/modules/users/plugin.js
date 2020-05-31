import axios from 'axios'

let users = []
<% if (options.url) { %>
  users = axios.get('<%= options.url %>')
<% } %>

<% if (options.debug) { %>
  users.then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
<% } %>

export default ({ app }, inject) => {
  // app.$getUsers = async () => {
  //   return users
  // }
  inject('getUsers', async () => {
    return users
  })
}
