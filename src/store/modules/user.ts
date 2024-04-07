import { defineStore } from 'pinia'
import router from '@/router'
import type { IUserInfo, IMenuList } from '@/api'
import type { IUserState } from '@/store/modules/module-type/user-type'
import useCommonStore from './common'

const menuList:IMenuList = [
  {
    name: 'crud',
    path: '/crud',
    component: 'views/crud',
    icon: 'House',
    iconColor: '#CB56F2',
    meta: {
      keepAlive: false,
      tag: true,
      isHide: false,
      title: 'crud模板',
      isSearch: true
    },
    children: []
  },
  {
    'name': 'deep',
    'path': '/deep',
    'iconColor': '#7624E2',
    'icon': 'More',
    'meta': {
      title: '多级菜单'
    },
    'children': [
      {
        'name': 'deep1',
        'path': '/deep1',
        'iconColor': '#C818E5',
        'icon': 'House',
        'meta': {
          title: '二级菜单'
        },
        'children': [
          {
            'name': 'deep2',
            'path': '/deep2',
            'iconColor': '#DEEE1C',
            'component': 'views/layout/deep',
            'icon': 'House',
            'meta': {
              keepAlive: true,
              title: '三级菜单',
              isSearch: true
            },
            children: []
          }
        ]
      }
    ]
  }
]

const userStore = defineStore('userStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo,
      menuList: menuList
    }
  },
  actions: {
    addMenuRoutes() {
      this.menuList = menuList
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
