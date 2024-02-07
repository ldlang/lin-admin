import { defineStore } from 'pinia'

interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

interface UserInfo {
  name: string
  age: number
}

const userStore = defineStore('userStore', {
  state: (): State=> {
    return {
      userList: [{ name: 'John', age: 20 }],
      user: { name: '', age: 0 }
    }
  }
})

// 简单的数据类型可以不用声明类型
// const useStore = defineStore('storeId', {
//   // 为了完整类型推理，推荐使用箭头函数
//   state: () => {
//     return {
//       // 所有这些属性都将自动推断出它们的类型
//       count: 0,
//       name: 'Eduardo',
//       isAdmin: true,
//       items: [],
//       hasChanged: true,
//     }
//   },
// })

export default userStore
