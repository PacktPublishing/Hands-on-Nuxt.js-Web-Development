<template>
  <div class="container">
    To do
  </div>
</template>

<script>
// GraphQL query.
const GET_TODOS = `
  query GetTodos {
    _allTodosMeta {
      count
    },
    allTodos {
      name
      id
      images {
        name
        file {
          publicUrl
          filename
          originalFilename
        }
      }
    }
  }
`

export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.post('/admin/api', {
        query: GET_TODOS
      })
      // console.log('data = ', data.data)
      return {
        post: data.data
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },
}
</script>
