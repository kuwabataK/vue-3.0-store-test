import TestStore from './TestStore'

/**
 * このプロジェクトで利用するStoreのMapリスト
 */
const Stores = {
  TestStore,
}
export default Stores

export type StoresType = typeof Stores
