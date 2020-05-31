<template>
  <h1>
    Error
  </h1>
</template>

<script>
export default {
  asyncData ({ error }) {
    return error({
      statusCode: 404,
      message: 'User not found'
    })
  }
}
</script>
