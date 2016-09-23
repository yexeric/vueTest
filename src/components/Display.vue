<template>
	<h3>Counter:</h3>
    Count is {{ counterValue }}
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      // note that you're passing the function itself, and not the value 'getCount()'
      counterValue: getCount
    }
  }
}
</script>