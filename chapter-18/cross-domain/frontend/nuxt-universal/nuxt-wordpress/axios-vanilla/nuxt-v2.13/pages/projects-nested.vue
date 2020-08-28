<template>

  <div>

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="small-12 cell">
            <h1>{{ post.post_title }}</h1>
          </div>
        </div>
      </div>

    </div>
    <!-- row -->

    <nuxt-child :key="$route.params.number"/>

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

  scrollToTop: false,
}
</script>
