<template>
  <div>
    <ol>
      <TodoItem
        v-for="item in groceryList"
        v-bind:item="item"
        v-bind:key="item.id"
        v-on:add-item="addItem"
        v-on:delete-item="deleteItem"
      ></TodoItem>
    </ol>

    <p>{{ cart }}</p>
    <p><span v-html="`&pound;`"></span>{{ total }}</p>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue'
export default {
  data () {
    return {
      cart: [],
      total: 0,
      groceryList: [
        { id: 0, text: 'Lentils', price: 2 },
        { id: 1, text: 'Cauliflower', price: 1.5 },
        { id: 2, text: 'Broccoli', price: 1 }
      ]
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addItem (item) {
      this.cart.push(item)
      this.total = this.shoppingCartTotal
    },
    deleteItem (item) {
      this.cart.splice(this.cart.findIndex(e => e === item), 1)
      this.total = this.shoppingCartTotal
    }
  },
  computed: {
    shoppingCartTotal() {
      let prices = this.cart.map(item => item.price)
      let sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      return sum
    }
  }
}
</script>

<style>
/** empty */
</style>
