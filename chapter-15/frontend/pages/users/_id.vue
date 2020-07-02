<template>

  <!-- article -->
  <div class="row" v-if="user">

    <!--text container -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">

          <!-- cell -->
          <div class="large-7 small-12 cell">

            <div class="container-text">
              <h2>
                {{ user.name }}
              </h2>
              <p>tel: {{ user.phone }}</p>
              <p>www: {{ user.website }}</p>
              <nuxt-link class="button" to="/users">
                Users
              </nuxt-link>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>
    </div>
    <!--text container -->

  </div>
  <!-- article -->

</template>

<script>
export default {
  name: 'id',
  async asyncData ({ $axiosTypicode, params, error }) {
    try {
      let { data } = await $axiosTypicode.get('/users/' + params.id)
      return {
        user: data
      }
    } catch (e) {
      return error({
        statusCode: 404,
        message: 'User not found'
      })
    }
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
