<template>
  <div>
    <h2>
      _subTopic
    </h2>
    <p>sub topic: {{ subTopic }}</p>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error }) {
    return {
      subTopic: params.subTopic
    }
  }
}
</script>
