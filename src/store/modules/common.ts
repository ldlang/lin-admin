import { defineStore } from 'pinia'
import { isEmpty } from 'lodash-es'
import { ELayoutMode } from '@/layouts/type'
import type { ICommonState, ITagList, ITagItem } from '@/store/modules/module-type/common-type'

export const useCommonStore = defineStore('useCommonStore', {
  state: (): ICommonState=> {
    return {
      isCollapse: false,
      theme: 'default',
      isLock: false,
      lockPasswd: '',
      lockPath: '',
      tagList: [] as ITagList,
      activeTag: {} as ITagItem,
      layoutMode: ELayoutMode.vertical,
      mixMenuActive: '',
      isWatermark: false
    }
  },
  actions: {
    addTagList(tag: ITagItem) {
      if (isEmpty(tag)) return
      this.activeTag = tag
      // 如果tag已经在tagList中，则不添加
      if (!isEmpty(this.tagList.find(item=> item.path === tag.path))) return
      this.tagList.push(tag)
    }
  },
  persist: {
    paths: ['isCollapse', 'theme', 'isLock', 'lockPasswd', 'lockPath', 'tagList', 'activeTag', 'layoutMode', 'isWatermark']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
