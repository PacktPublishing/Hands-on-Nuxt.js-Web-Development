<template>

  <!-- article -->
  <div class="row" v-if="post">

    <!--full screen image -->
    <div class="row">
      <div class="grid-container fluid">
        <div class="grid-x grid-padding-x small-padding-collapse">

          <!-- cell -->
          <div class="small-12 cell">

            <div class="image-background image-fullscreen" v-bind:style="{'background-image': 'url(' + $loadAssetImage(post.fullscreen.url) + ')' }" data-aos="fade-in">
              <img :src="$loadAssetImage(post.fullscreen.url)" :alt="post.fullscreen.alt">
            </div>

            <div class="image-description text-right" v-if="post.fullscreen.caption">
              <p v-html="post.fullscreen.caption"></p>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>

    </div>
    <!--full screen image -->

    <!--text container -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">

          <!-- cell -->
          <div class="large-7 small-12 cell">

            <div class="container-text" data-aos="fade-up">
              <h2 v-html="post.post_title"></h2>
              <div v-html="post.post_content"></div>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>
    </div>
    <!--text container -->

    <!--centralised image -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">

          <!-- vue - loop -->
          <template v-for="item in post.images">

            <!-- cell -->
            <div class="large-5 small-12 cell">
              <div class="container-image" data-aos="fade-up">
                <div class="image-centralised">
                  <img :src="$loadAssetImage(item.image.sizes.medium_large)" :alt="item.image.alt" class="float-center">
                </div>
                <div class="image-description text-right no-padding-right" v-if="item.caption" v-html="item.caption">
                </div>
              </div>
            </div>
            <!-- cell -->

          </template>
          <!-- vue - loop -->

        </div>
      </div>

    </div>
    <!--centralised image -->

  </div>
  <!-- article -->

</template>

<script>
export default {
  name: 'slug',

  async asyncData ({ params, error, $axios }) {
    try {
      let { data } = await $axios.get('/wp-json/api/v1/project/' + params.slug)
      return {
        post: data,
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },

  // https://nuxtjs.org/api/pages-head
  head () {
    return {
      title: this.post ? this.post.post_title : 'all',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.post.excerpt }
      ]
    }
  },
}
</script>
