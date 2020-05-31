<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">
          Users
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
    <p>Layout specifically for contact page.</p>
    <nuxt />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'fade-layout',
    mode: 'out-in'
  }
}
</script>
