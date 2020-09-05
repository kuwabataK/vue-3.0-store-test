export interface StoreBase {
  /**
   * このストアで利用するComposition apiを定義する
   */
  createStore: () => Object
}

/**
 * このストア(T)のcreateStoreの返り値を返す
 */
export type StoreType<T extends StoreBase['createStore']> = ReturnType<T>
