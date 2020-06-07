<template>
  <div>
    <h1>
      About
    </h1>
    <img :src="loadAssetImage(post.image.src)" :alt="post.image.alt">
    <nuxt-link to="/">
      Home
    </nuxt-link>
  </div>
</template>

<script>
const post = {
  id: 2,
  slug: 'about',
  title: 'About',
  image: {
    src: '/about.jpg',
    alt: 'Sample alt 1',
  }
}

export default {
  data () {
    return {
      post: post
    }
  }
}
</script>
