export interface IMenuItem {
  label: string,
  path: string,
  component?: string,
  icon: string,
  iconBgColor: string,
  meta: {
    keepAlive?: boolean,
    tag?: boolean,
    isHide?: boolean
  },
  children: [] | IMenuItem[]
}

export type IMenuList = IMenuItem[]
