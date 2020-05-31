<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container full-height">
      <div class="grid-x grid-padding-x small-padding-collapse full-height">

        <div class="small-10 cell small-offset-1">

          <!-- row swiper -->
          <div class="row row-swiper autoheight" v-if="allPages[0].slideImages" data-aos="fade-in">

            <!-- Swiper -->
            <div class="swiper-container">

              <div class="swiper-wrapper">


                <p class="hide">{{ this.$root.context.env.remoteUrl }} </p>

                <!-- vue - loop -->
                <template v-for="slide in allPages[0].slideImages">

                  <div class="swiper-slide">
                    <nuxt-link :to="'/projects/' + slide.link._label_"><img :src="$loadAssetImage(remoteUrl + slide.file.publicUrl)" :alt="slide.alt"></nuxt-link>
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
import gql from 'graphql-tag'

// https://www.keystonejs.com/guides/intro-to-graphql/#queries
// https://www.keystonejs.com/guides/intro-to-graphql/#allusers
// https://www.keystonejs.com/guides/intro-to-graphql/#search
const GET_PAGE = `
  query {
    allPages (search: "home") {
      title
      slideImages {
        alt
        link {
          _label_
        }
        file {
          publicUrl
        }
      }
    }
  }
`

export default {
  apollo: {
    allPages: gql`${ GET_PAGE }`,
  },

  async asyncData ({ error, $axios }) {
    try {
      let { data: { data: allPages } } = await $axios.post('/admin/api', {
        query: GET_PAGE
      })
      // console.log(allPages)
      return {
        post: allPages[0]
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

<style type="text/css">
  .swiper-slide img {
    max-width: 60%;
  }
</style>
