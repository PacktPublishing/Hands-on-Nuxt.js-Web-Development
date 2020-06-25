<template>
  <div>
    <h1>Using async/await</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World by using async/await')
      }, 2000)
    })

    const result = await promise
    return { message: result }
  }
}
</script>
