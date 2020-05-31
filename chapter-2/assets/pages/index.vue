<template>
  <div class="container">
    <div>
      <h1 class="title">
        assets
      </h1>
      <h2 class="subtitle">
        My grand Nuxt.js project
      </h2>
      <div class="links">
        <img src="~/assets/sample-1.jpg">
        <img src="~/static/sample-1.jpg">
        <img src="/sample-2.jpg">
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
