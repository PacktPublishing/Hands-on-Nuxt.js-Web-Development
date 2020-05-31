<template>
  <div>
    <h1>About page</h1>
    <p>Something awesome!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    console.log('axios.defaults.baseURL =', axios.defaults.baseURL)
    let result = await axios.get('/')
    console.log('result.config.url =', result.config.url)
    console.log('result.config.baseURL =', result.config.baseURL)
  }
}
</script>

<style>
/** empty */
</style>
