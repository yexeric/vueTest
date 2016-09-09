<template>
  <button @click.prevent="activate">Plus One</button>
</template>

<script>
	import store from '../store/store'
	export default {
	  methods: {
	    activate () {
	      store.dispatch('INCREMENT')
	    }
	  }
	}
</script>