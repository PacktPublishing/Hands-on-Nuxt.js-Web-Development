<template>
  <div>
    <h1>
      Home page
    </h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      // Disable template.
      // titleTemplate: null,
      meta: [
        { hid: 'description', name: 'description', content: 'My Nuxt portfolio' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
