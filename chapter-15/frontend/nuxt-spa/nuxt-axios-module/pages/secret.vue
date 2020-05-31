<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-12 cell">

          <h1>Super secret page</h1>
          <p>If you try to access this URL not connected, you will see the error page telling your that you are not connected.</p>
          <p> {{ $store.state }}</p>
          <NuxtLink to="/login">
            Back to the login page
          </NuxtLink>
        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->
</template>

<script>
export default {
  middleware: ['auth']
}
</script>
