<template>
  <div id="app">
    <increment></increment>
    <decrement></decrement>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
import store from './vuex/store'
export default {
  components: {
    Counter,
    Increment,
    Decrement
  },
  store: store
}
</script>

<style>
</style>