<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-shrink medium-6 cell">

          <div data-aos="fade-in">
            <!-- <img :src="$loadAssetImage('/about.jpg')" > -->
            <!-- <img :src="post.featured_image" :alt="post.post_title"> -->
            <img :src="$loadAssetImage(post.featured_image)" :alt="post.post_title">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-auto medium-6 cell">

          <div class="container-text-about" v-html="post.post_content" data-aos="fade-up"></div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->

</template>

<script>
export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/wp-json/api/v1/page/about')
      return {
        post: data
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
      meta: [
        // hid is used as unique identifier.
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>
