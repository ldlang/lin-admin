export const menuAllList = [
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
    name: 'deep',
    path: '/deep',
    iconColor: '#7624E2',
    icon: 'More',
    meta: {
      title: '多级菜单'
    },
    children: [
      {
        name: 'deep1',
        path: '/deep1',
        iconColor: '#C818E5',
        icon: 'House',
        meta: {
          title: '二级菜单'
        },
        children: [
          {
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
    name: 'functionalZone',
    path: '/functional-zone',
    iconColor: '#7624E2',
    icon: 'More',
    meta: {
      title: '功能区'
    },
    children: [
      {
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
  }
]
