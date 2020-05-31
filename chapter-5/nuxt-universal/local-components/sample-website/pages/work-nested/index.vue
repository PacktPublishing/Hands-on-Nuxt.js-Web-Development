<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container">

      <div class="grid-x grid-padding-x">

        <!-- vue - loop -->
        <template v-for="post in posts">

          <!-- cell -->
          <div class="medium-6 small-12 cell">

            <div class="container-card" v-on:click="triggerLink($event)" data-aos="fade-up">
              <div class="card card-work image-background flex-centre" v-bind:style="{'background-image': 'url(' + $loadAssetImage(post.thumbnail.src) + ')' }">
                <img :src="$loadAssetImage(post.thumbnail.src)" :alt="post.thumbnail.alt">
                <div class="layer"></div>
                <div class="flex-centre-vh">
                  <p class="card-excerpt">{{ post.excerpt }}</p>
                </div>

              </div>
              <div class="card-section">
                <h2 class="card-heading"><nuxt-link :to="'/work-nested/' + post.slug" v-html="post.title"></nuxt-link></h2>
              </div>
            </div>

          </div>
          <!-- cell -->

        </template>
        <!-- vue - loop -->

      </div>

    </div>

  </div>
  <!-- row -->

</template>

<script>
import $ from 'jquery'

const posts = [
  {
    id: 1,
    slug: 'work-sample-1',
    title: 'Work Sample 1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    thumbnail: {
      src: '/work-cover-1.jpg',
      alt: 'Work Sample 1'
    }
  },
  {
    id: 2,
    slug: 'work-sample-2',
    title: 'Work Sample 2',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    thumbnail: {
      src: '/work-cover-2.jpg',
      alt: 'Work Sample 2'
    }
  },
  {
    id: 3,
    slug: 'work-sample-3',
    title: 'Work Sample 3',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    thumbnail: {
      src: '/work-cover-3.jpg',
      alt: 'Work Sample 3'
    }
  },
  {
    id: 4,
    slug: 'work-sample-4',
    title: 'Work Sample 4',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    thumbnail: {
      src: '/work-cover-4.jpg',
      alt: 'Work Sample 4'
    }
  }
]

export default {
  data () {
    return {
      posts: posts
    }
  },

  // define methods under the `methods` object
  methods: {
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
