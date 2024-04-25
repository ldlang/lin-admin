/** 密码登录表单 */
export interface ILoginFromPassword {
  account: string;
  password: string;
}

/** 验证码登录表单 */
export interface ILoginFromCaptcha {
  phone: string;
  captcha: string;
}

export interface ILoginResult {
  token: string;
}

export interface IUserInfo {
  id: number;
  code: string;
  account: string;
  password: string;
  name: string;
  real_name: string;
  avatar: string;
  email: string;
  phone: string;
  birthday?: string;
  note: string;
  sex: number;
  role_id?: string;
  dept_id?: string;
  post_id?: string;
  create_user?: string;
  create_dept?: string;
  create_time?: string;
  update_user?: string;
  update_time?: string;
  status: number;
  is_deleted: number;
}
