export const menuAllList = [
  {
    id: 10,
    parentId: 0,
    name: 'dashboard',
    path: '/dashboard',
    iconColor: '#7624E2',
    icon: 'House',
    meta: {
      title: 'dashboard'
    },
    children: [
      {
        id: 11,
        parentId: 10,
        name: 'chart',
        path: '/dashboard/chart',
        component: 'views/dashboard/chart/chart',
        iconColor: '#7624E2',
        icon: 'House',
        meta: {
          title: '数字图表'
        },
        children: []
      }
    ]
  },
  {
    id: 1,
    parentId: 0,
    name: 'crud',
    path: '/crud',
    component: 'views/crud/crud',
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
    id: 2,
    parentId: 0,
    name: 'deep',
    path: '/deep',
    iconColor: '#7624E2',
    icon: 'More',
    meta: {
      title: '多级菜单'
    },
    children: [
      {
        id: 3,
        parentId: 2,
        name: 'deep1',
        path: '/deep1',
        iconColor: '#C818E5',
        icon: 'House',
        meta: {
          title: '二级菜单'
        },
        children: [
          {
            id: 4,
            parentId: 3,
            name: 'deep2',
            path: '/deep2',
            iconColor: '#DEEE1C',
            component: 'views/layout/deep',
            icon: 'House',
            meta: {
              keepAlive: true,
              title: '三级菜单',
              isSearch: true
            },
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    parentId: 0,
    name: 'functionalZone',
    path: '/functional-zone',
    iconColor: '#7624E2',
    icon: 'More',
    meta: {
      title: '功能区'
    },
    children: [
      {
        id: 6,
        parentId: 5,
        name: 'tinymce',
        path: '/rich-text/tinymce',
        component: 'views/functional-zone/tinymce',
        iconColor: '#C818E5',
        icon: 'House',
        meta: {
          title: '富文本'
        },
        children: []
      }
    ]
  },
  {
    id: 7,
    parentId: 0,
    name: 'link',
    path: '/link',
    iconColor: '#7624E2',
    icon: 'More',
    meta: {
      title: '外部页面'
    },
    children: [
      {
        id: 8,
        parentId: 7,
        name: 'inline',
        path: '/link/inline',
        component: 'views/link/inline',
        iconColor: '#C818E5',
        icon: 'House',
        meta: {
          title: '内嵌外链',
          url: 'https://ldlang.github.io/lin-admin/'
        },
        children: []
      },
      {
        id: 9,
        parentId: 7,
        name: 'outLink',
        path: '/link/outLink',
        component: 'views/link/outLink',
        iconColor: '#C818E5',
        icon: 'House',
        meta: {
          title: '外链跳转',
          target: true,
          url: 'https://ldlang.github.io/lin-admin/'
        },
        children: []
      }
    ]
  }
]
