<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is Nuxt + Python.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let { data } = await axios.get('http://127.0.0.1:5000')
    console.log(data)
    return {
      message: data.message
    }
  },
  head () {
    return {
      title: 'Nuxt + Python'
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
