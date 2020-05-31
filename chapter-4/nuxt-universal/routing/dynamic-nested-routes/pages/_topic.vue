<template>
  <div>
    <h1>
      _topic
    </h1>
    <p>topic: {{ topic }}</p>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error }) {
    return {
      topic: params.topic
    }
  }
}
</script>

