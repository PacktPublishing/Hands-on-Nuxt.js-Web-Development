<template>
  <div>
    <p>{{ name }}, {{ age }}, {{ job }}</p>
    <p>{{ experience }}, {{ experienceAlias }}, {{ experienceTotal }}</p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

export default {
  data () {
    return { localExperience: 2 }
  },
  computed: {
    // mix this into the outer object with the object spread operator
    ...mapState([
      // map this.name to store.state.name, etc
      'experience', 'name', 'age', 'job'
    ]),
    ...mapState({
      // arrow functions can make the code very succinct!
      // experience: state => state.experience,

      // to access local state with `this`, a normal function must be used
      experienceTotal (state) {
        return state.experience + this.localExperience
      }
    }),
    ...mapState({
      // passing the string value 'experience' is same as `state => state.experience`
      experienceAlias: 'experience',
    })
  }
  // computed: mapState([
  //   // map this.name to store.state.name, etc
  //   'name',
  //   'age',
  //   'job',
  // ])
}
</script>

<style>
/** empty */
</style>
