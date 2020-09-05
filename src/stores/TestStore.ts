import { reactive } from 'vue'
import { StoreBase } from './StoreBase'

class TestStore implements StoreBase {
  createStore() {
    const state = reactive({
      text: '',
    })
    return {
      get text() {
        return state.text
      },
      set text(text) {
        state.text = text
      },
    }
  }
}

export default new TestStore().createStore()
