import { defineStore } from 'pinia'
import type { ICommonState } from '@/store/modules/module-type/common-type'

const commonStore = defineStore('commonStore', {
  state: (): ICommonState=> {
    return {
      isCollapse: false,
      theme: 'default',
      isLock: false,
      lockPasswd: '',
      lockPath: ''
    }
  }
})

export default commonStore
