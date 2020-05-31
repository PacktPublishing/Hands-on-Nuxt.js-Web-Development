<template>

  <div>

    <header>

      <!-- row header -->
      <div class="row row-header">
          <div class="grid-container fluidx">
              <div class="grid-x grid-padding-x align-middle">

                <div class="large-3 medium-10 small-10 cell">
                  <div class="flex-centre full-height clone-logo-origin">
                    <Logo />
                  </div>
                </div>

                <div class="large-9 medium-2 small-2 cell">
                  <nav class="nav-header show-for-large">
                    <ul class="menu align-right expanded clone-origin">

                      <!-- vue - loop -->
                      <template v-for="item in nav">
                        <li><nuxt-link :to="'/' + item.link._label_" v-html="item.title"></nuxt-link></li>
                      </template>
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

                  <!-- this link will only be active at `/` -->
                  <!-- https://router.vuejs.org/api/#exact -->
                  <!-- https://github.com/nuxt/nuxt.js/issues/126 -->
                  <li><nuxt-link to="/" exact>Home</nuxt-link></li>

                  <!-- vue - loop -->
                  <template v-for="item in nav">
                    <li><nuxt-link :to="'/' + item.link._label_" v-html="item.title"></nuxt-link></li>
                  </template>
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
                  <template v-for="item in social">
                    <li><a :href="item.link" target="_blank"><i :class="item.classes"></i></a></li>
                  </template>
                  <!-- vue - loop -->

                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div class="copyright text-center">
        <Copyright />
      </div>

    </footer>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'
import Copyright from '~/components/copyright.vue'

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
    let nav = this.$store.state.menu
    return {
      nav: nav,
      social: social
    }
  },

  components: {
    Logo,
    Copyright
  },

  watch: {
    // Watch route changes.
    // https://stackoverflow.com/questions/46402809/vuejs-event-on-route-change
    $route(to, from) {
      // DOM not updated yet.
      this.$nextTick(function () {
        // DOM updated.
      })
    },
    // Or:
    // '$route': function (newRoute) {
    //   console.log(newRoute)
    // }
  },

  mounted () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      // window.element = document.querySelector('.form-submit')
      // console.log('Find element from default.js:', window.element)
    })

    this.$router.afterEach((to, from) => {
      // Code on each route change after the first load but won't be
      // called on the first load.
    })

    // Detect ZF sceen size on resize.
    window.addEventListener('resize', () => {
      console.log('Screen size: ' + this.$getCurrentScreenSize())
    })
  }
}
</script>

<style>
/** empty */
</style>
