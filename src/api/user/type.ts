export interface IMeta {
  title?: string;
  keepAlive?: boolean;
  tag?: boolean;
  isHide?: boolean;
  isSearch?: boolean;
}

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

export type IMenuList = IMenuItem[];
