<template>
  <div>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/secured">/secured</router-link></li>
      <li><router-link to="/login">/login</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
