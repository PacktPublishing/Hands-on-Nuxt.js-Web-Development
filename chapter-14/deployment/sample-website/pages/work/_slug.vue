<template>

  <!-- article -->
  <div class="row" v-if="post">

    <!--full screen image -->
    <div class="row">
      <div class="grid-container fluid">
        <div class="grid-x grid-padding-x small-padding-collapse">

          <!-- cell -->
          <div class="small-12 cell">

            <div class="image-background image-fullscreen" v-bind:style="{'background-image': 'url(' + post.fullscreen.src + ')' }" data-aos="fade-in">
              <img :src="post.fullscreen.src" :alt="post.fullscreen.alt">
            </div>

            <div class="image-description text-right" v-if="post.fullscreen.caption">
              <p v-html="post.fullscreen.caption"></p>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>

    </div>
    <!--full screen image -->

    <!--text container -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">

          <!-- cell -->
          <div class="large-7 small-12 cell">

            <div class="container-text" data-aos="fade-up">
              <h2 v-html="post.title"></h2>
              <div v-html="post.content"></div>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>
    </div>
    <!--text container -->

    <!--centralised image -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-center">

          <!-- vue - loop -->
          <template v-for="image in post.images">

            <!-- cell -->
            <div class="large-5 small-12 cell">
              <div class="container-image" data-aos="fade-up">
                <div class="image-centralised">
                  <img :src="image.src" :alt="image.alt" class="float-center">
                </div>
                <div class="image-description text-right no-padding-right" v-if="image.caption">
                  <p v-html="image.caption"></p>
                </div>
              </div>
            </div>
            <!-- cell -->

          </template>
          <!-- vue - loop -->

        </div>
      </div>

    </div>
    <!--centralised image -->

  </div>
  <!-- article -->

</template>

<script>
// Dummy posts.
const posts = [
  {
    id: 1,
    slug: 'work-sample-1',
    title: 'Work Sample 1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    content: '<p>(Work Sample 1) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
    fullscreen: {
      src: '/images/work-sample-1-00.jpg',
      alt: 'Work Sample 1',
      caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
    },
    images: [
      {
        src: '/images/work-sample-1-01.jpg',
        alt: 'Sample alt 1',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-1-02.jpg',
        alt: 'Sample alt 2',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-1-03.jpg',
        alt: 'Sample alt 3',
        caption: ''
      },
      {
        src: '/images/work-sample-1-04.jpg',
        alt: 'Sample alt 4',
        caption: ''
      }
    ]
  },
  {
    id: 2,
    slug: 'work-sample-2',
    title: 'Work Sample 2',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    content: '<p>(Work Sample 2) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
    fullscreen: {
      src: '/images/work-sample-2-00.jpg',
      alt: 'Work Sample 2',
      caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
    },
    images: [
      {
        src: '/images/work-sample-2-01.jpg',
        alt: 'Sample alt 1',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-2-02.jpg',
        alt: 'Sample alt 2',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-2-03.jpg',
        alt: 'Sample alt 3',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-2-04.jpg',
        alt: 'Sample alt 4',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      }
    ]
  },
  {
    id: 3,
    slug: 'work-sample-3',
    title: 'Work Sample 3',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    content: '<p>(Work Sample 3) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
    fullscreen: {
      src: '/images/work-sample-3-00.jpg',
      alt: 'Work Sample 3',
      caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
    },
    images: [
      {
        src: '/images/work-sample-3-01.jpg',
        alt: 'Sample alt 1',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-3-02.jpg',
        alt: 'Sample alt 2',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-3-03.jpg',
        alt: 'Sample alt 3',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-3-04.jpg',
        alt: 'Sample alt 4',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      }
    ]
  },
  {
    id: 4,
    slug: 'work-sample-4',
    title: 'Work Sample 4',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    content: '<p>(Work Sample 4) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
    fullscreen: {
      src: '/images/work-sample-4-00.jpg',
      alt: 'Work Sample 4',
      caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
    },
    images: [
      {
        src: '/images/work-sample-4-01.jpg',
        alt: 'Sample alt 4',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-4-02.jpg',
        alt: 'Sample alt 2',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-4-03.jpg',
        alt: 'Sample alt 3',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      },
      {
        src: '/images/work-sample-4-04.jpg',
        alt: 'Sample alt 4',
        caption: '<b>Mixed media<\/b>, 2014<br\/>200cm x 200cm x 200cm'
      }
    ]
  },
]

export default {
  name: 'slug',

  asyncData ({ app, params, error }) {
    // Use ES6 arrow function with find() to fetch the post.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    var result = posts.find(post => post.slug === params.slug)
    // Or:
    // let result = posts.find(this.getpost)

    // Handle error - page/post not found.
    // https://nuxtjs.org/guide/async-data#handling-errors
    if(result === undefined) {
      return error({ statusCode: 404, message: 'Post not found' })
    }

    return {
      post: result
    }
  },

  data () {
    return {
      post: {
        // This will not be merged with asyncData.
        description: 'description about this post.'
      },
      // This will be merged with asyncData.
      description: 'description in data function.'
    }
  },

  // https://nuxtjs.org/api/pages-head
  head () {
    return {
      title: this.post ? this.post.title : 'all',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.post.excerpt }
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
