import { defineStore } from 'pinia'

const commonStore = defineStore('commonStore', {
  state: ()=> {
    return {
      isCollapse: false
    }
  }
})

export default commonStore
