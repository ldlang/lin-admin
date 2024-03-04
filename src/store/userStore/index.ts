import { defineStore } from 'pinia'
import type { IUserInfo } from '@/api'

interface IUserState {
  token: string
  userInfo: IUserInfo
}

const userStore = defineStore('userStore', {
  state: (): IUserState=> {
    return {
      token: '',
      userInfo: {} as IUserInfo
    }
  }
})

export default userStore
