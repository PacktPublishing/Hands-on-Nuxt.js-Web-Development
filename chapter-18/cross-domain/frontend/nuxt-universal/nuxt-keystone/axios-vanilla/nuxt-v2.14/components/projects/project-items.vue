<template>

  <div>

    <!-- row -->
    <div class="row" v-if="posts">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <!-- vue - loop -->
          <template v-for="post in posts">

            <!-- cell -->
            <div class="medium-6 small-12 cell">

              <!-- <nuxt-link :to="item.link" target="_blank"> -->

              <div class="container-card" v-on:click="triggerLink($event)" data-aos="fade-up">
                <div class="card card-work image-background flex-centre" v-bind:style="{'background-image': 'url(' + $loadAssetImage(remoteUrl + post.featuredImage.file.publicUrl) + ')' }">
                  <img :src="$loadAssetImage(remoteUrl + post.featuredImage.file.publicUrl)" :alt="post.title">
                  <div class="layer"></div>
                  <div class="flex-centre-vh">
                    <p class="card-excerpt">{{ post.excerpt }}</p>
                  </div>

                </div>
                <div class="card-section">
                  <h2 class="card-heading"><nuxt-link :to="'/projects/' + post.name" v-html="post.title"></nuxt-link></h2>
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
    <div class="row row-pager" v-if="posts.length > 0">
      <div class="grid-container">

        <div class="grid-x grid-padding-x">

          <!-- cell -->
          <div class="cell small-4">
            <nuxt-link :to="'/projects/pages/' + prevPage" class="hollow button secondary" v-if="prevPage">
              Previous
            </nuxt-link>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-center">
            <p v-if="currentPage && totalPages">{{ currentPage }} of {{ totalPages }}</p>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-right">
            <nuxt-link :to="'/projects/pages/' + nextPage" class="hollow button secondary" v-if="nextPage">
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
      totalPages: null,
      currentPage: null,
      nextPage: null,
      prevPage: null,
    }
  },

  async fetch () {
    // Get the page number from the query.
    // Always make the negative number positive.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    const postsPerPage = 6
    const number = this.$route.params.number
    const pageNumber = number === undefined ? 1 : Math.abs(parseInt(number))
    const skip = number === undefined ? 0 : (pageNumber - 1) * postsPerPage
    console.log('pages/projects/index.vue: pageNumber =', pageNumber)
    console.log('pages/projects/index.vue: skip =', skip)

    // Query, filter, limit and sorting:
    // https://www.keystonejs.com/guides/intro-to-graphql#_allusersmeta
    // https://www.keystonejs.com/guides/intro-to-graphql#orderby
    // https://www.keystonejs.com/guides/intro-to-graphql#skip
    // https://www.keystonejs.com/guides/intro-to-graphql#first
    const GET_PROJECTS = `
      query {
        _allProjectsMeta {
          count
        }
        allProjects (orderBy: "name_DESC", skip: ${ skip }, first: ${ postsPerPage }) {
          name
          title
          excerpt
          featuredImage {
            alt
            file {
              publicUrl
            }
          }
        }
      }
    `

    try {
      let { data } = await this.$axios.post('/admin/api', {
        query: GET_PROJECTS
      })

      let totalPosts = data.data._allProjectsMeta.count
      let totalMaxPages = Math.ceil(totalPosts / postsPerPage)

      this.posts = data.data.allProjects
      this.totalPages = totalMaxPages
      this.currentPage = pageNumber
      this.nextPage = pageNumber === totalMaxPages ? null : pageNumber + 1
      this.prevPage = pageNumber === 1 ? null : pageNumber - 1

      console.log('pages/projects/index.vue: nextPage =', this.nextPage)
      console.log('pages/projects/index.vue: prevPage =', this.prevPage)

    } catch (err) {
      let data = err.response.data

      // Error Handling
      // https://nuxtjs.org/blog/understanding-how-fetch-works-in-nuxt-2-12/#error-handling

      // Set status code on server-side
      if (process.server) {
        this.$nuxt.context.res.statusCode = data.status
      }
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
