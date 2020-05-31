<template>
  <div>
    <h1>About page</h1>
    <p class="blue">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    return {
      message: 'Something awesome!'
    }
  }
}
</script>

<style>
.blue {
  color: #0000ff;
}
</style>
