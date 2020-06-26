<template>
  <div>
    <h1>Vue Injections</h1>
    <p>this.$sum(1, 2) => {{ this.$sum(1, 2) }}</p>
    <p>sum => $sum(2, 3) => {{ sum }}</p>
  </div>
</template>

<script>
export default {
  data () {
    if (process.server) {
      console.log('data () called on /vue-injections')
    }

    return {
      sum: this.$sum(2, 3)
    }
  },
  mounted(){
    console.log(this.$sum(1, 2))

  }
}
</script>
