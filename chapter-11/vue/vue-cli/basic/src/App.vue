<template>
  <div>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/secured">/secured</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: `App`,
}
</script>
