import type { ILoginFromPassword, ILoginFromCaptcha } from '@/api'
import type { FormRules } from 'element-plus'
// 动态导入组件
const loginAccount = defineAsyncComponent(()=> import('./login-account.vue'))
const loginCaptcha = defineAsyncComponent(()=> import('./login-captcha.vue'))

/** 登录tab数组 */
interface ILoginTab {
  label: string
  value: string
}

/** hook函数类型 */
type TLoginFormHooks = ()=>{
  tabSelect: Ref<string>
  loginTabs: ILoginTab[]
  loginFromEnum: IloginFromEnum
}

/** 登录枚举 */
export const enum tabFormEnum {
  password = 'password',
  sms = 'sms'
}

/** 登录表单 */
interface IloginFromEnum {
  [tabFormEnum.password]: {
    form: ILoginFromPassword
    rules: FormRules<ILoginFromPassword>
    component: typeof loginAccount
  }
  [tabFormEnum.sms]: {
    form: ILoginFromCaptcha
    rules: FormRules<ILoginFromCaptcha>
    component: typeof loginCaptcha
  }
}
export const loginFormHooks: TLoginFormHooks = ()=> {
  const tabSelect = ref(tabFormEnum.password)

  const loginTabs = reactive<ILoginTab[]>([
    {
      label: '密码登录',
      value: tabFormEnum.password
    },
    {
      label: '短信登录',
      value: tabFormEnum.sms
    }
  ])
  // 表单枚举
  const loginFromEnum = reactive<IloginFromEnum>({
    /** 密码登录 */
    [tabFormEnum.password]: {
      form: {
        account: 'super',
        password: 'super'
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      // 组件被包裹响应式值，需要用markRaw包裹，因为太消耗性能
      component: markRaw(loginAccount)
    },
    /** 短信登录 */
    [tabFormEnum.sms]: {
      form: {
        phone: '',
        captcha: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号为11位', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '验证码为6位', trigger: 'blur' }
        ]
      },
      // 组件被包裹响应式值，需要用markRaw包裹，因为太消耗性能
      component: markRaw(loginCaptcha)
    }
  })
  return {
    tabSelect,
    loginTabs,
    loginFromEnum
  }
}
