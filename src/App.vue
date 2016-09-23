<template>
  <div id="app">
    <increment></increment>
    <decrement></decrement>
    <counter></counter>
    <h3> Upload File: </h3>
    <form id = "uploadForm" enctype =  "multipart/form-data" action = "api/uploadFile" method = "post">
      <input type="file" name="file" />
      <input type="submit" value="Upload" name="submit">
    </form>
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