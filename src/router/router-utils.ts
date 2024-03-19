import { IMenuList } from '@/api'

const modules = import.meta.glob('@/views/**/*.vue')

export const routerUtils = {
  formatRoutes(menuList: IMenuList) {
    console.log('menuList', menuList)
    const comp = 'views/common/403'
    const obj = {
      path: '/403',
      component: ()=> modules[`@/${comp}.vue`]
    }
  }
}

