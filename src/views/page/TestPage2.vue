<template>
  <display-text />
  <props-test :text="{ val: 'Propsの入力テストだよ' }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayText from '@/components/DisplayText.vue'
import PropsTest from '@/components/PropsTest.vue'

export default defineComponent({
  name: 'TestPage2',
  components: {
    DisplayText,
    PropsTest,
  },
})
</script>

<style scoped lang="scss">
.isDisabled {
  opacity: 0.3;
  pointer-events: none;
}
</style>
