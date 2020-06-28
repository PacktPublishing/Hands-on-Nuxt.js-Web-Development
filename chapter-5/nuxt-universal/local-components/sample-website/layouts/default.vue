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
                      <Nav
                        v-for="item in nav"
                        v-bind:item="item"
                        v-bind:key="item.slug"
                      ></Nav>
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
                  <Nav
                    v-for="item in nav"
                    v-bind:item="item"
                    v-bind:key="item.slug"
                  ></Nav>
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
                  <Social
                    v-for="item in social"
                    v-bind:item="item"
                    v-bind:key="item.name"
                  ></Social>
                  <!-- vue - loop -->

                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div class="copyright text-center">
        <Copyright v-bind:copyright="copyright"/>
      </div>

    </footer>
  </div>
</template>

<script>
// No need to import component manually if set components: true in nuxt.config.js
// For more information:
// https://github.com/nuxt/components
// https://nuxtjs.org/api/configuration-components
// import Logo from '~/components/logo.vue'
// import Copyright from '~/components/copyright.vue'
// import Nav from '~/components/nav.vue'
// import Social from '~/components/social.vue'

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
  // No need to import component manually if set components: true in nuxt.config.js
  // For more information:
  // https://github.com/nuxt/components
  // https://nuxtjs.org/api/configuration-components
  // components: {
  //   Logo,
  //   Copyright,
  //   Nav,
  //   Social
  // },

  data () {
    return {
      copyright: '&copy; Lau Tiam Kok',
      nav,
      social
    }
  },

  mounted () {
    // Detect ZF sceen size on resize.
    this.$getCurrentScreenSize()
  },
}
</script>
