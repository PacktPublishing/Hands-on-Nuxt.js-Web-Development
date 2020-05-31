<template>
  <div>
    <h1>About page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
// Note that you must import jQuery here if it is not loaded in the config stage.
import $ from 'jquery'

export default {
  async asyncData (context) {
    return {
      message: 'Something awesome!'
    }
  },
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter: el => {
      console.log('about: before enter')
      $(el).hide()
    },
    enter: (el, done) => {
      console.log('about: enter')
      $(el).fadeTo(3000, 1)
      done()
    },
    afterEnter: el => {
      console.log('about:after enter')
    },
    leave: (el, done) => {
      console.log('about: leave')
      $(el).fadeTo(3000, 0, () => {
        $(el).hide()
      })
      done()
    },
    afterLeave: el => {
      console.log('about: after leave')
      $(el).hide()
    }
  }
}
</script>

