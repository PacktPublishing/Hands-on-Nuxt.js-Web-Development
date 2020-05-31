<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-shrink medium-6 cell">

          <div data-aos="fade-in">
            <img :src="$loadAssetImage(post.image.src)" :alt="post.image.alt">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-auto medium-6 cell">

          <div class="container-text-about" v-html="post.content" data-aos="fade-up"></div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->

</template>

<script>
const post = {
  id: 2,
  slug: 'about',
  title: 'About',
  excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  content: '<p>(About) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
  image: {
    src: '/about.jpg',
    alt: 'Sample alt 1',
    caption: ''
  }
}

export default {
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },

  data () {
    return {
      post: post
    }
  },

  head () {
    return {
      title: this.post.title || 'all',
      meta: [
        // hid is used as unique identifier.
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  methods: {
    getpost (post) {
      return post.slug === this.$route.params.slug
    },
  }
}
</script>
