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

    <!-- row -->
    <div class="row">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <!-- vue - loop -->
          <PostItem
            v-for="post in posts"
            v-bind:post="post"
            v-bind:key="post.id"
          ></PostItem>
          <!-- vue - loop -->

        </div>
      </div>

    </div>
    <!-- row -->

  </div>
</template>

<script>
import $ from 'jquery'
import PostItem from '~/components/work/post-item.vue'

const post = {
  id: 3,
  slug: 'work',
  title: 'Work',
  excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  content: '<p>(Work) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
  posts: [
    {
      id: 1,
      slug: 'work-sample-1',
      title: 'Work Sample 1',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      thumbnail: {
        src: '/work-cover-1.jpg',
        alt: 'Work Sample 1'
      }
    },
    {
      id: 2,
      slug: 'work-sample-2',
      title: 'Work Sample 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      thumbnail: {
        src: '/work-cover-2.jpg',
        alt: 'Work Sample 2'
      }
    },
    {
      id: 3,
      slug: 'work-sample-3',
      title: 'Work Sample 3',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      thumbnail: {
        src: '/work-cover-3.jpg',
        alt: 'Work Sample 3'
      }
    },
    {
      id: 4,
      slug: 'work-sample-4',
      title: 'Work Sample 4',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      thumbnail: {
        src: '/work-cover-4.jpg',
        alt: 'Work Sample 4'
      }
    }
  ]
}

export default {
  components: {
    PostItem
  },

  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },

  data () {
    return {
      post: post,
      posts: post.posts
    }
  },

  head () {
    return {
      title: this.post.title || 'all',
    }
  },

  // define methods under the `methods` object
  methods: {
    goTo(route, $event) {
      window.location.href = route
    },

    triggerLink($event) {
      var context = $($event.target).parents('.container-card')
      context.find('a')[0].click()
    }
  }
}
</script>

<style lang="less">
/** empty */
</style>
