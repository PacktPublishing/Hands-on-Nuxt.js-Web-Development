<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="~/assets/images/sample-01.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-02.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-03.jpg"></div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    // https://github.com/nolimits4web/Swiper/blob/master/demos/020-navigation.html
    var swiper = new this.$swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
</script>

<style>
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
