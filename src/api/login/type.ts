export interface ILoginFrom {
  account: string;
  password: string;
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
