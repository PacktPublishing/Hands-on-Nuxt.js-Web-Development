<template>

  <div>

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="small-12 cell">
            <h1>{{ post.title }}</h1>
          </div>
        </div>
      </div>

    </div>
    <!-- row -->

    <ProjectItems />

  </div>

</template>

<script>
export default {
  async asyncData ({ params, error, $axios }) {
    const GET_PROJECT = `
      query {
        allPages (search: "project") {
          title
        }
      }
    `

    try {
      let { data } = await $axios.post('/admin/api', {
        query: GET_PROJECT
      })

      return {
        post: data.data.allPages[0],
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },

  head () {
    return {
      title: this.post.title || 'all',
    }
  },
}
</script>
