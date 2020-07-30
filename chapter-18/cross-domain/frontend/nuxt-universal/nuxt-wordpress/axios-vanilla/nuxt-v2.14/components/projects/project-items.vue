<template>

  <div>

    <!-- row -->
    <div class="row" v-if="posts">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <!-- vue - loop -->
          <template v-for="post in posts.items">

            <!-- cell -->
            <div class="medium-6 small-12 cell">

              <!-- <nuxt-link :to="item.link" target="_blank"> -->

              <div class="container-card" v-on:click="triggerLink($event)" data-aos="fade-up">
                <div class="card card-work image-background flex-centre" v-bind:style="{'background-image': 'url(' + $loadAssetImage(post.featured_image) + ')' }">
                  <img :src="$loadAssetImage(post.featured_image)" :alt="post.post_title">
                  <div class="layer"></div>
                  <div class="flex-centre-vh">
                    <p class="card-excerpt">{{ post.post_excerpt }}</p>
                  </div>

                </div>
                <div class="card-section">
                  <h2 class="card-heading"><nuxt-link :to="'/projects/' + post.post_name" v-html="post.post_title"></nuxt-link></h2>
                </div>
              </div>

            </div>
            <!-- cell -->

          </template>
          <!-- vue - loop -->

          <div class="small-12 cell" v-if="posts.length == 0">
            <p>No projects found.</p>
          </div>

        </div>
      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row row-pager" v-if="posts">
      <div class="grid-container">

        <div class="grid-x grid-padding-x">

          <!-- cell -->
          <div class="cell small-4">
            <nuxt-link :to="'/projects/pages/' + posts.prev_page" class="hollow button secondary" v-if="posts.prev_page">
              Previous
            </nuxt-link>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-center">
            <p v-if="posts.current_page && posts.total_pages">{{ posts.current_page }} of {{ posts.total_pages }}</p>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-right">
            <nuxt-link :to="'/projects/pages/' + posts.next_page" class="hollow button secondary" v-if="posts.next_page">
              Next
            </nuxt-link>
          </div>
          <!-- cell -->

        </div>

      </div>

    </div>
    <!-- row -->

  </div>

</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      posts: [],
    }
  },

  async fetch () {
    // Get the page number from the params.
    const number = this.$route.params.number
    const pageNumber = number === undefined ? 1 : parseInt(number)

    try {
      let posts = await this.$axios.get('/wp-json/api/v1/projects/' + pageNumber)
      this.posts = posts.data
    } catch (err) {
      let data = err.response.data
      // console.log('data =', data)

      throw new Error(data.message)
    }
  },

  // define methods under the `methods` object
  methods: {
    // v-on:click="triggerLink('/projects/' + post.slug, $event)"
    goTo(route, $event) {
      window.location.href = route
    },

    triggerLink($event) {
      var context = $($event.target).parents('.container-card')
      context.find('a')[0].click()
    }
  }
}
</script>
