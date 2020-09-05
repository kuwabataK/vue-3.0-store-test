import { inject, App } from 'vue'
import Stores from './Stores'

export default class StoreUtil {
  /**
   * 引数で指定したストアを利用する
   * @param storeName 利用するStoreの名前
   */
  static useStore<T extends keyof typeof Stores>(storeName: T): typeof Stores[T] {
    const store = inject(storeName)
    if (!store) {
      throw new Error(`${storeName} is not provided`)
    }
    return store as typeof Stores[T]
  }

  /**
   * ストアをすべて挿入する
   * @param app
   */
  static provideAllStore(app: App<Element>) {
    const storeNames = Object.keys(Stores)
    storeNames.forEach(name => {
      app.provide(name, Stores[name as keyof typeof Stores])
    })
    return app
  }
}
