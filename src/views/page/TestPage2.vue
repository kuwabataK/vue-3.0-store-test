<template>
  <display-text />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayText from '@/components/DisplayText.vue'

export default defineComponent({
  name: 'TestPage2',
  components: {
    DisplayText,
  },
})
</script>

<style scoped lang="scss">
.isDisabled {
  opacity: 0.3;
  pointer-events: none;
}
</style>
