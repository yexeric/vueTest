<template>
	<h3>Decrement:</h3>
	<button @click="minusOne">Minus One</button>
</template>

<script>
	import { decrement } from '../vuex/actions'
	export default {
	  vuex: {
	    actions: {
	      minusOne: decrement
	    }
	  }
	}
</script>