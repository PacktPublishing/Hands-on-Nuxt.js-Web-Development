<template>
  <div>

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="small-12 cell">
            <h1 class="text-center">Users</h1>
          </div>
        </div>
      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <div class="small-12 cell">
            <ul class="align-center menu vertical">
              <li v-for="user in users" v-bind:key="user.id">
                <nuxt-link :to="'/users/' + user.id">
                  {{ user.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
    <!-- row -->

  </div>
</template>

<script>
export default {
  async asyncData ({ $axiosTypicode, error }) {
    console.log('$axiosTypicode.defaults.baseURL = ', $axiosTypicode.defaults.baseURL)
    try {
      let { data: users } = await $axiosTypicode.get('/users')
      return { users }
    } catch (e) {
      return error({
        statusCode: 404,
        message: e.message
      })
    }
  },

  head () {
    return {
      title: 'Users',
    }
  }
}
</script>
