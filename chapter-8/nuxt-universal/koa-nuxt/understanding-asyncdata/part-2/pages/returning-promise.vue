<template>
  <div>
    <h1>Returning a Promise</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World by returning a Promise')
      }, 1000)
    })

    return promise.then((value) => {
      return { message: value }
    })
  }
}
</script>
