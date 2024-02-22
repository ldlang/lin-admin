import { defineStore } from 'pinia'

interface State {
  token: string
}

const userStore = defineStore('userStore', {
  state: (): State=> {
    return {
      token: ''
    }
  }
})

export default userStore
