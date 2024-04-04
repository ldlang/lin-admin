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
    name: 'error',
    path: '/error',
    icon: 'Avatar',
    meta: {
      title: '异常页'
    },
    'iconColor': '#164C4B',
    'children': [
      {
        name: 'error403',
        'path': '/403',
        'component': 'views/common/403',
        'icon': 'House',
        'iconColor': '#C0BD21',
        'children': [],
        'meta': {
          title: 'error403',
          isSearch: true
        }
      },
      {
        name: 'error404',
        'path': '/404',
        'component': 'views/common/404',
        'icon': 'House',
        'iconColor': '#A206A6',
        'children': [],
        'meta': {
          title: 'error404',
          isSearch: true
        }
      },
      {
        'name': 'error500',
        'path': '/500',
        'component': 'views/common/500',
        'icon': 'Share',
        'iconColor': '#B55FB3',
        'children': [],
        'meta': {
          title: 'error500',
          isSearch: true
        }
      }
    ]
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
        'name': 'deep-1',
        'path': '/deep/deep',
        'iconColor': '#C818E5',
        'icon': 'House',
        'meta': {
          title: '多级菜单1-1'
        },
        'children': [
          {
            'name': 'deep-2',
            'path': '/deep/deep/deep',
            'iconColor': '#DEEE1C',
            'component': 'views/layout/deep',
            'icon': 'House',
            'meta': {
              keepAlive: true,
              title: '多级菜单2-1',
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
