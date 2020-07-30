<template>

  <div>
    <NestedProjectItems />
  </div>

</template>

<script>

export default {
  async asyncData ({ error, $axios }) {
    try {
      let post = await $axios.get('/wp-json/api/v1/page/projects', { parse: true })
      return {
        post: post.data,
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },

  head () {
    return {
      title: this.post.post_title || 'all',
    }
  },
}
</script>
