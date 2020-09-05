<template>
  <div>Propsの値は {{ props.text.val }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Props = Readonly<{
  text?: {
    val?: string
  }
}>

export default defineComponent({
  name: 'PropsTest',
  props: {
    text: Object,
  },
  setup(props: Props) {
    return {
      props,
    }
  },
})
</script>

<style scoped lang="scss"></style>
