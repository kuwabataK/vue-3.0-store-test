<template>
  <div class="main">
    <div>TOPページだよ</div>
    <div class="input-container">
      <input class="input" v-model="testStore.text" />
      <button class="button" @click="onClickSend">移動</button>
    </div>
    <display-text />
  </div>
</template>

<script lang="ts">
import StoreUtil from '@/stores/StoreUtil'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import DisplayText from '@/components/DisplayText.vue'

export default defineComponent({
  name: 'TestPage',
  setup() {
    const testStore = StoreUtil.useStore('TestStore')
    const router = useRouter()
    const onClickSend = () => {
      router.push('/test2')
    }
    return {
      testStore,
      onClickSend,
    }
  },
  components: {
    DisplayText,
  },
})
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    height: 20px;
    .input {
      width: 100px;
      height: 100%;
      border: 1px solid black;
      border-radius: 4px;
    }
    .button {
      width: 40px;
      height: 100%;
      font-size: 10px;
      overflow: hidden;
    }
  }
}
</style>
