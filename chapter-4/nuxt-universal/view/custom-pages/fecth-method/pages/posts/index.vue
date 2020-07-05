<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in $store.state.posts" v-bind:key="post.id">
        <nuxt-link :to="`posts/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch () {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // Access store via this.$nuxt.context.
    const { store } = this.$nuxt.context
    store.commit('setPosts', data)
  }
}
</script>
