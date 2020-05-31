import axios from '~/plugins/axios'

// A middleware can be asynchronous. To do this, simply return a Promise or use the 2nd callback argument.
// https://nuxtjs.org/guide/routing#middleware
export default async ({ store, redirect }) => {
  try {
    const { data } = await axios.get('/api/private', {
      headers: {
        Authorization: `Bearer: ${store.state.jwt}`
      }
    })
    store.commit('setGreeting', data.data)
  } catch (error) {
    await axios.post('/api/public/users/logout')
    store.commit('setUser', null)
    store.commit('setToken', null)

    console.log(error.response.data)
    if(process.browser){
      alert(error.response.data.message)
    }
    return redirect('/login')
  }
}
