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
            <img :src="$loadAssetImage(remoteUrl + post.featuredImage.file.publicUrl)" :alt="post.title">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-auto medium-6 cell">

          <div class="container-text-about" v-html="post.content" data-aos="fade-up"></div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->

</template>

<script>
const GET_PAGE = `
  query {
    allPages (search: "about") {
      title
      content
      featuredImage {
        alt
        file {
          publicUrl
        }
      }
    }
  }
`
export default {
  async asyncData ({ error, $axios, route }) {
    try {
      let { data } = await $axios.post('/admin/api', {
        query: GET_PAGE,
        staticPath: route.path, //'/about'
      })
      return {
        post: data.data.allPages[0]
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
      title: this.post.title || 'all',
      meta: [
        // hid is used as unique identifier.
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>
