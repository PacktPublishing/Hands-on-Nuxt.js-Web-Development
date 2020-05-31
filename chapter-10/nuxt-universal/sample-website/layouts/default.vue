<template>

  <div>

    <div class="row-overlay hide-for-large">

      <!-- row -->
      <div class="row row-nav-top">

        <div class="grid-container">

          <!-- grid-x -->
          <div class="grid-x grid-padding-x align-middle">

            <div class="small-10 cell">
              <div class="flex-centre full-height clone-logo-dest">
                <!-- <a href="#" class="flex-child button-logo">
                  <span>Peter Quinn Davis</span>
                  <span class="underline-logo"></span>
                </a> -->
              </div>
            </div>

            <div class="cell small-2">
              <a href="#" class="button-exit-overlay-menu float-right"><i class="material-icons">close</i></a>
            </div>

          </div>
          <!-- grid-x -->
        </div>

      </div>
      <!-- row -->

      <!-- row -->
      <div class="row row-nav-bottom">

        <div class="grid-container">

          <!-- grid-x -->
          <div class="grid-x grid-padding-x">

            <div class="cell small-12">
              <ul class="vertical menu vertical align-left clone-dest">
                <!-- to be appended via JavaScript -->
                <!-- <li><a href="#">About</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Shop</a></li>
                <li class="last"><a href="#">Contact</a></li> -->
              </ul>
            </div>

          </div>
          <!-- grid-x -->
        </div>

      </div>
      <!-- row -->

    </div>

    <header>

      <!-- row header -->
      <div class="row row-header">
          <div class="grid-container fluidx">
              <div class="grid-x grid-padding-x align-middle">

                <div class="large-3 medium-10 small-10 cell">
                  <div class="flex-centre full-height clone-logo-origin">
                    <BaseLogo />
                  </div>
                </div>

                <div class="large-9 medium-2 small-2 cell">
                  <nav class="nav-header show-for-large">
                    <ul class="menu align-right expanded clone-origin">

                      <!-- vue - loop -->
                      <BaseNav
                        v-for="item in nav"
                        v-bind:item="item"
                        v-bind:key="item.slug"
                      ></BaseNav>
                      <!-- vue - loop -->

                    </ul>
                  </nav>

                  <div class="container-burger float-right hide-for-large">
                    <a href="#" class="button-hamburger button-launch-overlay-menu"><i class="material-icons">menu</i></a>
                  </div>
                </div>

              </div>
          </div>
      </div>
      <!-- row header -->

    </header>

    <main>
      <!--
        https://stackoverflow.com/questions/44748575/how-to-get-current-route-name-in-nuxt-js
        https://router.vuejs.org/api/#router-link
      -->

      <!-- {{ $nuxt.$route.path }}
      {{ $nuxt.$route.name }} -->

      <nuxt />
    </main>

    <footer>
      <div class="row row-nav-footer">
        <div class="grid-container grid-container-footer">
          <div class="grid-x grid-padding-x">

            <div class="small-12 cell">
              <nav class="nav-footer">
                <ul class="menu align-center">
                  <li><nuxt-link to="/">Home</nuxt-link></li>

                  <!-- vue - loop -->
                  <BaseNav
                    v-for="item in nav"
                    v-bind:item="item"
                    v-bind:key="item.slug"
                  ></BaseNav>
                  <!-- vue - loop -->

                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div class="row row-nav-social">
        <div class="grid-container fluidx">
          <div class="grid-x grid-padding-x">

            <div class="small-12 cell">
              <nav class="nav-social">
                <ul class="menu align-center">

                  <!-- vue - loop -->
                  <BaseSocial
                    v-for="item in social"
                    v-bind:item="item"
                    v-bind:key="item.name"
                  ></BaseSocial>
                  <!-- vue - loop -->

                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div class="copyright text-center">
        <BaseCopyright v-bind:copyright="copyright"/>
      </div>

    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
import 'what-input'
import '~/plugins/jquery-ui-bundle'
import BaseLogo from '~/components/base-logo.vue'
import BaseCopyright from '~/components/base-copyright.vue'
import BaseNav from '~/components/base-nav.vue'
import BaseSocial from '~/components/base-social.vue'

if (process.client) {
  var Foundation = require("foundation-sites")
}

if (process.client) {
  var MotionUI = require("motion-ui")
}

// Dummy nav.
const nav = [
  {
    name: 'About',
    slug: 'about',
    link: '/about'
  },
  {
    name: 'Work',
    slug: 'work',
    link: '/work'
  },
  {
    name: 'Work (Nested)',
    slug: 'work-nested',
    link: '/work-nested'
  },
  {
    name: 'Contact',
    slug: 'contact',
    link: '/contact'
  }
]

// Dummy social links.
const social = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/lautiamkok/',
    classes: 'fi-social-instagram'
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/lautiamkok',
    classes: 'fi-social-linkedin'
  },
  {
    name: 'github',
    link: 'https://github.com/lautiamkok',
    classes: 'fi-social-github'
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/lautiamkok',
    classes: 'fi-social-twitter'
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/lautiamkok',
    classes: 'fi-social-facebook'
  },
]

export default {
  data() {
    return {
      copyright: '&copy; Lau Tiam Kok',
      nav: nav,
      social: social
    }
  },
  components: {
    BaseLogo,
    BaseCopyright,
    BaseNav,
    BaseSocial
  },
  watch: {
    // Watch route changes.
    // https://stackoverflow.com/questions/46402809/vuejs-event-on-route-change
    $route(to, from) {
      // console.log(from)
      // console.log(to)
      // DOM not updated yet.
      this.$nextTick(function () {
        // DOM updated.
        this.setCurrentClass()
      })
    },
    // Or:
    // '$route': function (newRoute) {
    //   console.log(newRoute)
    // }
  },
  mounted() {
    $(document).foundation()

    // Nuxt set the active class to a tag but we want to set it to li tag
    // so use jQuery to set it for us.
    this.setCurrentClass()

    // Define elements.
    var menuOrigin = $('.menu.clone-origin')
    var menuDest = $('.menu.clone-dest')

    // Clone the inner elements of ul.menu.dropdown.
    // var $clone = menuOrigin.clone(true, true) // .clone method will clone the styling too.
    var $clone = menuOrigin.html() // .html() method only copies the tags, not the styling
    menuDest.append($clone)

    // Define elements.
    var logoOrigin = $('.clone-logo-origin')
    var logoDest = $('.clone-logo-dest')

    // var $clone = logoOrigin.clone(true, true) // .clone method will clone the styling too.
    var $clone = logoOrigin.html() // .html() method only copies the tags, not the styling
    logoDest.append($clone)

    // Overlay menu.
    var rowOverlay = $('.row-overlay')
    var buttonLaunch = $('.button-launch-overlay-menu')
    var buttonExit = $('.button-exit-overlay-menu')

    buttonLaunch.on('click', function () {
      rowOverlay.addClass('is-open')
      return false
    })

    buttonExit.on('click', function () {
      rowOverlay.removeClass('is-open')
      return false
    })

    // Detect ZF sceen size on resize.
    window.addEventListener('resize', () => {
      var current = this.getFoundationCurrentMediaQuery()
      console.log('Screen size: ' + current)
    })
  },
  methods: {
    setCurrentClass() {
      var $active = $('.nuxt-link-exact-active')
      var $target = $active.parent()
      var $context = $target.parents('.row')
      $('li', $context).removeClass('current')
      $target.addClass('current')
    }
  },
}
</script>

<style>
/** empty */
</style>
