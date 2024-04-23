import { defineStore } from 'pinia'
import router from '@/router'
import { getMenusApi, type IUserInfo, IMenuList } from '@/api'
import type { IUserState } from '@/store/modules/module-type/user-type'
import useCommonStore from './common'

const userStore = defineStore('userStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo,
      menuList: [] as IMenuList,
      routeIsLoad: false
    }
  },
  actions: {
    async addMenuRoutes() {
      const params = { account: this.userInfo.account }
      try {
        const { data } = await getMenusApi(params)
        this.menuList = data
      } catch (e) {
        console.error(e)
      }
      router.routerUtils.formatRoutes(this.menuList)
    },
    logout() {
      this.$reset()
      useCommonStore().$reset()
    }
  },
  persist: {
    paths: ['token', 'userInfo', 'menuList']
  }
})

export default userStore
