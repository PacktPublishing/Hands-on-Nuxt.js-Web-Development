<template>
  <div>
    <h1 @click="$router.push('/')">Nuxt static</h1>
    <nuxt></nuxt>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

h1 {
  cursor: pointer;
}

body {
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
