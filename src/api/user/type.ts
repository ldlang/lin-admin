// 菜单的meta信息
export interface IMeta {
  /** 菜单标题 */
  title?: string;
  /** 是否缓存 */
  keepAlive?: boolean;
  /** 是否显示tag */
  tag?: boolean;
  /** 是否隐藏 */
  isHide?: boolean;
  /** 是否搜索 */
  isSearch?: boolean;
  /** 是否新窗口打开 */
  target?: boolean;
  /** 菜单链接 */
  url?: string;
}

// 单个菜单
export interface IMenuItem {
  id: number;
  parentId: number;
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
