<template>
  <h1>Hello jQuery UI</h1>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    var state = true
    $('h1').on('click', function() {
      if ( state ) {
        $(this).animate({
          color: 'red', fontSize: '10em'
        }, 1000, 'easeInQuint', () => {
          console.log('easing in done')
        })
      } else {
        $(this).animate({
          color: 'black', fontSize: '2em'
        }, 1000, 'easeOutExpo', () => {
          console.log('easing out done')
        })
      }
      state = !state
    })
  }
}
</script>
