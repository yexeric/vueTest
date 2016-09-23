<template>
	<h3>Increment:</h3>
	<button @click="plusOne">Plus One</button>
</template>

<script>
	import { increment } from '../vuex/actions'
	export default {
	  vuex: {
	    actions: {
	      plusOne: increment
	    }
	  }
	}
</script>
