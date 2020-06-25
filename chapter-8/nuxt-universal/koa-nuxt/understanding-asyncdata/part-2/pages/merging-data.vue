<template>
  <div>
    <h1>Merging Data</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { message: 'Hello World' }
  },
  asyncData (context) {
    return { message: 'Data Merged' }
  }
}
</script>
