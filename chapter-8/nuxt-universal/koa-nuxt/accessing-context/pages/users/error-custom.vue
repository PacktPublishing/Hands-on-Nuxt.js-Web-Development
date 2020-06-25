<template>
  <h1>
    Error
  </h1>
</template>

<script>
export default {
  asyncData ({ error }) {
    return error({
      status: 404,
      text: 'User not found'
    })
  }
}
</script>
