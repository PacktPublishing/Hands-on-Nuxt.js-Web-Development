<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>
    <div class="background"></div>
    <img src="~/assets/bug.svg?stroke=red&stroke-width=4&fill=blue">
  </div>
</template>

<style lang="less">
.background {
   height: 100px;
   width: 100px;
   border: 4px solid black;
   // Due to css-loader upgradation, use ~assets instead of ~/assets for alias
   // in CSS data type, e.g., background: url("~assets/banner.svg")
   // https://github.com/nuxt/nuxt.js/issues/3931
   background-image: url('~assets/bug.svg?stroke=red&stroke-width=2');
}
</style>
