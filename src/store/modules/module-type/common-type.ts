import type { IMeta } from '@/api'

export interface ITagItem {
  title: string;
  path: string;
  fullPath: string;
  params?: string;
  query?: string;
  meta?: IMeta;
}

export type ITagList = Array<ITagItem>;

export interface ICommonState {
  /** 菜单折叠状态 */
  isCollapse: boolean;
  /** 主题 */
  theme: string;
  /** 锁屏状态 */
  isLock: boolean;
  /** 锁屏密码 */
  lockPasswd: string;
  /** 锁屏时的页面路径 */
  lockPath: string;
  /** 标签页列表 */
  tagList: ITagList;
  /** 当前激活的标签页 */
  activeTag: ITagItem;
}
