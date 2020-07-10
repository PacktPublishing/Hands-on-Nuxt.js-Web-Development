<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container full-height">
      <div class="grid-x grid-padding-x small-padding-collapse full-height">

        <div class="small-10 cell small-offset-1">

          <div class="container-error flex-centre-vh">
            <div>
              <h1 v-if="error.statusCode === 404">{{error.statusCode}} {{ error.message }}</h1>
              <h1 v-else>An error occurred</h1>
              <nuxt-link to="/">Home page</nuxt-link>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
  <!-- row -->

</template>

<script>
// https://nuxtjs.org/guide/views/#error-page
export default {
  props: ['error'],
  // layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style scoped>
  .container-error {
    min-height: 50vh;
  }
</style>
