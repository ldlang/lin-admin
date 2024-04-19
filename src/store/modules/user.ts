import { defineStore } from 'pinia'
import router from '@/router'
import { getMeunsApi, type IUserInfo, IMenuList } from '@/api'
import type { IUserState } from '@/store/modules/module-type/user-type'
import useCommonStore from './common'

const userStore = defineStore('userStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo,
      menuList: [] as IMenuList
    }
  },
  actions: {
    async addMenuRoutes() {
      const params = { account: this.userInfo.account }
      try {
        const { data } = await getMeunsApi(params)
        this.menuList = data
      } catch (e) {
        console.error(e)
      }
      router.routerUtils.formatRoutes(this.menuList)
    },
    logout() {
      this.token = ''
      this.userInfo = {} as IUserInfo
      this.menuList = []
      const { isLock, lockPasswd, lockPath } = toRefs(useCommonStore())
      isLock.value = false
      lockPasswd.value = ''
      lockPath.value = ''
    }
  }
})

export default userStore
