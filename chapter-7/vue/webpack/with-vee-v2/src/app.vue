<template>
  <div>
    <h1>Fun With Vue Forms</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/basic">/basic</router-link></li>
      <li><router-link to="/dynamic-values">/dynamic-values</router-link></li>
      <li><router-link to="/modifiers">/modifiers</router-link></li>
      <li><router-link to="/vee-validation">/vee-validation</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style>
/** empty */
</style>
