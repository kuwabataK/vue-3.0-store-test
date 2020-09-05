<template>
  <div>入力された内容は、 {{ testStore.text }}</div>
</template>

<script lang="ts">
import StoreUtil from '@/stores/StoreUtil'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisplayText',
  setup() {
    const testStore = StoreUtil.useStore('TestStore')
    return {
      testStore,
    }
  },
})
</script>

<style scoped lang="scss"></style>
