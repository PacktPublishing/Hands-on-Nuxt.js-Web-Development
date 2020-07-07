<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-12 cell">

          <h1>Super secured page</h1>
          <p>If you try to access this URL not connected, you will see the error page telling your that you are not connected.</p>
          <p>Message from secured API: {{ greeting }}</p>
          <p> {{ $store.state }}</p>
          <NuxtLink to="/login">
            Back to the login page
          </NuxtLink>
        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ redirect }) {
    try {
      const { data } = await axios.get('/api/private')
      return {
        greeting: data.data.message
      }
    } catch (error) {
      if(process.browser){
        alert(error.response.data.message)
      }
      return redirect('/login')
    }
  },
  middleware: ['auth', 'token']
}
</script>
