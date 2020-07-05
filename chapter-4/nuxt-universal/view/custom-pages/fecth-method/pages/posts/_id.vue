<template>
  <div v-if="post">
    <h2>
      {{ post.title}}
    </h2>
    <p>{{ post.body }}</p>
    <nuxt-link class="button" to="/posts">
      Posts
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
      console.log(data)
      return {
        post: data
      }
    } catch (e) {
      return error({
        statusCode: 404,
        message: 'post not found'
      })
    }
  }
}
</script>
