<template>
  <div id="app">
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Decrement:</h3>
    <decrement></decrement>
    <h3>Counter:</h3>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
export default {
  components: {
    Counter,
    Increment,
    Decrement
  }
}
</script>

<style>
</style>