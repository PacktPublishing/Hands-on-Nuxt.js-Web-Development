<template>

  <div>

    <h1>
      User
    </h1>

    <p>{{ id }}</p>

  </div>

</template>

<script>
export default {
  asyncData ({ params }) {
    return { id: params.id }
  }
}
</script>
