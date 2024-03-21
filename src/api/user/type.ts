export interface IMenuItem {
  name: string,
  path: string,
  component?: string,
  icon: string,
  iconColor: string,
  meta: {
    title?: string,
    keepAlive?: boolean,
    tag?: boolean,
    isHide?: boolean,
  },
  children: [] | IMenuItem[],
  redirect?: string
}

export type IMenuList = IMenuItem[]
