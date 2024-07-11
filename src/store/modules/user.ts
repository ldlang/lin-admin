import { defineStore } from 'pinia'
import router from '@/router'
import { getMenusApi, type IUserInfo, IMenuList } from '@/api'
import type { IUserState } from '@/store/modules/module-type/user-type'
import { useCommonStore } from './common'

export const useUserStore = defineStore('useUserStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo,
      menuList: [] as IMenuList,
      routeIsLoad: false,
      leftMenuList: [] as IMenuList
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
      this.menuList.forEach(item=> router.routerUtils.linkRouteFormat(item))
      router.routerUtils.formatRoutes(this.menuList)
    },
    logout() {
      this.$reset()
      useCommonStore().$reset()
    }
  },
  persist: {
    paths: ['token', 'userInfo', 'menuList', 'leftMenuList']
  }
})
