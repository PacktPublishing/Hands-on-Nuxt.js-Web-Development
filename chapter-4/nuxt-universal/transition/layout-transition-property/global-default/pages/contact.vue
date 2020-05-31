<template>
  <div>
    <h1>Contact page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    return {
      message: 'Get in touch!'
    }
  }
}
</script>
