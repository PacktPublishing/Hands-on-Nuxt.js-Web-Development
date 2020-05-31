<template>

  <div>

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="small-12 cell">
            <h1>{{ post.title }}</h1>
          </div>
        </div>
      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <!-- vue - loop -->
          <template v-for="post in posts.items">

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
                  <h2 class="card-heading"><nuxt-link :to="'/projects/' + post._label_" v-html="post.title"></nuxt-link></h2>
                </div>
              </div>

            </div>
            <!-- cell -->

          </template>
          <!-- vue - loop -->

          <div class="small-12 cell" v-if="posts.items.length == 0">
            <p>No projects found.</p>
          </div>

        </div>
      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row row-pager" v-if="posts.items.length > 0">
      <div class="grid-container">

        <div class="grid-x grid-padding-x">

          <!-- cell -->
          <div class="cell small-4">
            <nuxt-link :to="'?page=' + posts.prevPage" class="hollow button secondary" v-if="posts.prevPage">
              Previous
            </nuxt-link>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-center">
            <p v-if="posts.currentPage && posts.totalPages">{{ posts.currentPage }} of {{ posts.totalPages }}</p>
          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-4 text-right">
            <nuxt-link :to="'?page=' + posts.nextPage" class="hollow button secondary" v-if="posts.nextPage">
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
import gql from 'graphql-tag'

export default {
  async asyncData ({ app, query, error, $axios }) {
    const client = app.apolloProvider.defaultClient

    const allPosts = await client.query({
          query: gql`{
              allProjects {
                title
              }
          }`
      }).then(({ data }) => data && data.allProjects)

    console.log(allPosts)

    // Get the page number from the query.
    // Always make the negative number positive.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    let pageNumber = Math.abs(parseInt(query.page))
    if (query.page === undefined) {
      pageNumber = 1
    }
    let postsPerPage = 6
    let skip = query.page === undefined ? 0 : (pageNumber - 1) * postsPerPage
    console.log('pages/projects/index.vue: pageNumber =', pageNumber)
    console.log('pages/projects/index.vue: skip =', skip)

    // Query, filter, limit and sorting:
    // https://www.keystonejs.com/guides/intro-to-graphql#_allusersmeta
    // https://www.keystonejs.com/guides/intro-to-graphql#orderby
    // https://www.keystonejs.com/guides/intro-to-graphql#skip
    // https://www.keystonejs.com/guides/intro-to-graphql#first
    const GET_PROJECTS = `
      query {
        allPages (search: "project") {
          title
        }
        _allProjectsMeta {
          count
        }
        allProjects (orderBy: "name_DESC", skip: ${ skip }, first: ${ postsPerPage }) {
          _label_
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
      let { data } = await $axios.post('/admin/api', {
        query: GET_PROJECTS
      })

      let totalPosts = data.data._allProjectsMeta.count
      let totalMaxPages = Math.ceil(totalPosts / postsPerPage)
      let nextPage = pageNumber === totalMaxPages ? null : pageNumber + 1
      let prevPage = pageNumber === 1 ? null : pageNumber - 1
      console.log('pages/projects/index.vue: nextPage =', nextPage)
      console.log('pages/projects/index.vue: prevPage =', prevPage)

      // let posts = await $axios.get('/wp-json/api/v1/projects/' + pageNumber)
      return {
        post: data.data.allPages[0],
        posts: {
          items: data.data.allProjects,
          totalPages: totalMaxPages,
          currentPage: pageNumber,
          nextPage: nextPage,
          prevPage: prevPage,
        }
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
    }
  },

  watchQuery: [
    'page' // or 'true' for all queries.
  ],

  mounted () {
    //
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

<style lang="less">
/** empty */
</style>
