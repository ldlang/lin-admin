// 菜单的meta信息
export interface IMeta {
  title?: string;
  keepAlive?: boolean;
  tag?: boolean;
  isHide?: boolean;
  isSearch?: boolean;
}

// 单个菜单
export interface IMenuItem {
  name: string;
  path: string;
  component?: string;
  icon: string;
  iconColor: string;
  meta: IMeta;
  children: [] | IMenuItem[];
  redirect?: string;
}

// 菜单列表
export type IMenuList = IMenuItem[];

// 用户信息
export interface IUserInfoFrom {
  name: string;
  avatar: string;
  newPassword: string;
  confirmPassword: string;
}
