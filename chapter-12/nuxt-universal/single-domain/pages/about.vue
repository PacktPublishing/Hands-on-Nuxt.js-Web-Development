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
    let test = await axios.get('/')
    console.log(test)
  }
}
</script>

<style>
/** empty */
</style>
