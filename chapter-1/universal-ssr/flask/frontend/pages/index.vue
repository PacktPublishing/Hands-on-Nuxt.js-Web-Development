<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is Nuxt + Express.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let { data } = await axios.get('http://127.0.0.1:4000')
    console.log(data)
    return {
      message: data.message
    }
  },
  head () {
    return {
      title: 'Nuxt + Express'
    }
  }
}
</script>

<style>
h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}
</style>
