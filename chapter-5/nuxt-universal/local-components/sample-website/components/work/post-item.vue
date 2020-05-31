<template>
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
        <h2 class="card-heading"><nuxt-link :to="'/work/' + post.slug" v-html="post.title"></nuxt-link></h2>
      </div>
    </div>

  </div>
  <!-- cell -->
</template>

<script>
import $ from 'jquery'
import AOS from 'aos'

export default {
  props: ['post'],
  mounted () {
    // AOS scroll reveal.
    // http://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    })
  },

  // define methods under the `methods` object
  methods: {
    // v-on:click="triggerLink('/work/' + post.slug, $event)"
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
