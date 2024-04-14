import { defineStore } from 'pinia'
import { isEmpty } from 'lodash-es'
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
  },
  actions: {
    addTagList(tag: ITagItem) {
      if (isEmpty(tag)) return
      this.activeTag = tag
      // 如果tag已经在tagList中，则不添加
      if (!isEmpty(this.tagList.find(item=> item.path === tag.path))) return
      this.tagList.push(tag)
    }
  }
})

export default commonStore
