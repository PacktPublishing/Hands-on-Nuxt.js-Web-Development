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
              <nuxt-link class="button" to="/user">
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
import axios from '~/plugins/axios'

export default {
  name: 'id',
  async asyncData ({ params, error }) {
    // return axios.get('/api/users/' + params.id)
    //   .then((res) => {
    //     return { user: res.data.data }
    //   })
    //   .catch((e) => {
    //     error({ statusCode: 404, message: 'User not found' })
    //   })

    try {
      let { data } = await axios.get('/api/users/' + params.id)
      return {
        user: data.data
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
