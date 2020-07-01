<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container full-height">
      <div class="grid-x grid-padding-x small-padding-collapse full-height">

        <div class="small-10 cell small-offset-1">

          <!-- row swiper -->
          <div class="row row-swiper autoheight" v-if="post.images" data-aos="fade-in">

            <!-- Swiper -->
            <div class="swiper-container">

              <div class="swiper-wrapper">

                <!-- vue - loop -->
                <template v-for="image in post.images">

                  <div class="swiper-slide">
                    <nuxt-link :to="image.link"><img :src="$loadAssetImage(image.src)" :alt="image.alt"></nuxt-link>
                  </div>

                </template>
                <!-- vue - loop -->

              </div>

              <!-- Add Arrows -->
              <div class="swiper-button-next use-default swiper-button-white swiper-arrow"></div>
              <div class="swiper-button-prev use-default swiper-button-white swiper-arrow"></div>

            </div>
            <!-- Swiper -->

            <!-- Add Pagination -->
            <div class="container-pagination">
              <div class="grid-x grid-padding-x align-middle full-height small-padding-collapse">
                <div class="swiper-pagination small-12 cell align-self-middle"></div>
              </div>
            </div>

          </div>
          <!-- row swiper -->

        </div>

      </div>
    </div>

  </div>
  <!-- row -->
</template>

<script>
import $ from 'jquery'
import Swiper from 'swiper'

const post = {
  id: 1,
  slug: 'home',
  title: 'Home',
  excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  content: '<p>(Home) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
  images: [
    {
      src: '/slide-1.jpg',
      alt: 'Sample alt 1',
      caption: '',
      link: '/work/work-sample-4'
    },
    {
      src: '/slide-2.jpg',
      alt: 'Sample alt 2',
      caption: '',
      link: '/work/work-sample-1'
    },
    {
      src: '/slide-3.jpg',
      alt: 'Sample alt 3',
      caption: '',
      link: '/work/work-sample-2'
    },
    {
      src: '/slide-4.jpg',
      alt: 'Sample alt 4',
      caption: '',
      link: '/work/work-sample-3'
    }
  ]
}

export default {
  // https://nuxtjs.org/api/pages-layout/
  // layout: 'home',
  // OR
  // layout (context) {
  //   return 'home'
  // },
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
      // Disable template.
      titleTemplate: null
    }
  },

  mounted () {
    // Fade in the swiper arrow buttons.
    $('.row-swiper, .row-swiper-article').hover(function () {
      var selector = $('.swiper-arrow')
      $(selector).fadeIn('fast')
    }, function () {
      var selector = $('.swiper-arrow')
      $(selector).fadeOut('fast', function () {
        // callback
      })
    })

    // Attach swiper to the container.
    var swiperSlide = new Swiper('.row-swiper .swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      grabCursor: true,
      freeMode: false,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.row-swiper .swiper-button-next',
        prevEl: '.row-swiper .swiper-button-prev',
      },
      pagination: {
        el: '.row-swiper .swiper-pagination',
        clickable: true,
      },
      autoHeight: true
    })
  }
}
</script>
