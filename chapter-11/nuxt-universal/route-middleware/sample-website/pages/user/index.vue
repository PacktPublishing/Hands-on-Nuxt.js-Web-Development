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
              <li v-for="(user, index) in users" v-bind:key="user">
                <nuxt-link :to="'user/' + index">
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
import axios from '~/plugins/axios'

export default {
  async asyncData({error}) {
    try {
      let { data } = await axios.get('/api/users')
      return {
        users: data.data
      }
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

<style lang="less">
/** empty */
</style>
