<template>
  <div>
    <h1>About page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    return {
      message: 'Something awesome!'
    }
  },

  head () {
    return {
      title: 'About',
    }
  }
}
</script>
