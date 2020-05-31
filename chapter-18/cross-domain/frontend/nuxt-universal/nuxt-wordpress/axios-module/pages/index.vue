<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container full-height">
      <div class="grid-x grid-padding-x small-padding-collapse full-height">

        <div class="small-10 cell small-offset-1">

          <!-- row swiper -->
          <div class="row row-swiper autoheight" v-if="post.slides" data-aos="fade-in">

            <!-- Swiper -->
            <div class="swiper-container">

              <div class="swiper-wrapper">

                <!-- vue - loop -->
                <template v-for="slide in post.slides">

                  <div class="swiper-slide">
                    <nuxt-link :to="'/projects/' + slide.link.post_name"><img :src="slide.image.sizes.medium_large" :alt="slide.image.alt"></nuxt-link>
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

export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/api/page/home')
      return {
        post: data
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
