<template>
  <div>
    <h3>
      _subTopic Slug
    </h3>
    <p>Sub topic item: {{ slug }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error }) {
    return {
      slug: params.slug
    }
  }
}
</script>
