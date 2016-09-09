<template>
  <button @click.prevent="activate">Minus One</button>
</template>

<script>
	import store from '../store/store'
	export default {
	  methods: {
	    activate () {
	      store.dispatch('DECREMENT')
	    }
	  }
	}
</script>