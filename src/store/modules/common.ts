import { defineStore } from 'pinia'
import type { ICommonState, ITagList, ITagItem } from '@/store/modules/module-type/common-type'

const commonStore = defineStore('commonStore', {
  state: (): ICommonState=> {
    return {
      isCollapse: false,
      theme: 'default',
      isLock: false,
      lockPasswd: '',
      lockPath: '',
      tagList: [] as ITagList,
      activeTag: {} as ITagItem
    }
  }
})

export default commonStore
