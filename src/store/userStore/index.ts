import { defineStore } from 'pinia'
import type { IUserInfo, IMenuList } from '@/api'

const menuList:IMenuList = [
  {
    label: 'crud模板',
    path: '/home',
    component: 'views/home',
    icon: 'House',
    iconBgColor: '#CB56F2',
    meta: {
      keepAlive: false,
      tag: false,
      isHide: false
    },
    children: []
  },
  {
    label: '异常页',
    path: '/error',
    icon: 'Avatar',
    meta: {},
    'iconBgColor': '#164C4B',
    'children': [
      {
        'label': 'error403',
        'path': '403',
        'component': 'views/common/403',
        'icon': 'House',
        'iconBgColor': '#C0BD21',
        'children': [],
        'meta': {}
      },
      {
        'label': 'error404',
        'path': '404',
        'component': 'views/common/404',
        'icon': 'House',
        'iconBgColor': '#A206A6',
        'children': [],
        'meta': {}
      },
      {
        'label': 'error500',
        'path': '500',
        'component': 'views/common/500',
        'icon': 'Share',
        'iconBgColor': '#B55FB3',
        'children': [],
        'meta': {}
      }
    ]
  },
  {
    'label': '多级菜单',
    'path': '/deep',
    'iconBgColor': '#7624E2',
    'icon': 'More',
    'meta': {},
    'children': [
      {
        'label': '多级菜单1-1',
        'path': '/deep/deep',
        'iconBgColor': '#C818E5',
        'icon': 'House',
        'meta': {},
        'children': [
          {
            'label': '多级菜单2-1',
            'path': '/deep/deep/deep',
            'iconBgColor': '#DEEE1C',
            'component': 'views/layout/deep',
            'icon': 'House',
            'meta': {
              keepAlive: true
            },
            children: []
          }
        ]
      }
    ]
  }
]

interface IUserState {
  token: string
  userInfo: IUserInfo,
  menuList: IMenuList
}

const userStore = defineStore('userStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo,
      menuList: menuList
    }
  }
})

export default userStore
