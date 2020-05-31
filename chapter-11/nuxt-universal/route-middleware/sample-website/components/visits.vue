<template>
  <ul>
    <li v-for="(visit, index) in visits" :key="index">
      <i>{{ visit.date | dates }} | {{ visit.date | times }}</i> - {{ visit.path }}
    </li>
  </ul>
</template>

<script>
export default {
  filters: {
    dates(date) {
      // Split the date, e.g:
      // 2019-05-24T21:55:44.673Z
      return date.split('T')[0]
    },
    times(date) {
      // Split the time, e.g:
      // 2019-05-24T21:55:44.673Z
      return date.split('T')[1].split('.')[0]
    }
  },
  computed: {
    visits() {
      return this.$store.state.visits.slice().reverse()
    }
  }
}
</script>

<style scoped>
ul {
  background-color:rgba(0, 0 ,0 ,0.5);
  position: fixed;
  bottom: 20px;
  right: 20px;
  margin: 0;
  padding: 20px;
  max-height: 50%;
  overflow: auto;
  list-style-type: none;
  z-index: 999999;
}
ul li {
  padding: 2px 0;
  color: white;
}
ul li i {
  font-style: normal;
}
</style>
