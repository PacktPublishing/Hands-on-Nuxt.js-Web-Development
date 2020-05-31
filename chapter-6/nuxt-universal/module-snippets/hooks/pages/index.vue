<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>
    <div class="background"></div>
    <img src="~/assets/bug.svg">
  </div>
</template>

<script>
export default {
  //
}
</script>

<style>
.background {
   height: 100px;
   width: 100px;
   border: 4px solid black;
   background-image: url('~assets/bug.svg');
}
</style>
