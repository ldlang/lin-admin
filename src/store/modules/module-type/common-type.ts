import type { IMeta } from '@/api'
import type { ELayoutMode } from '@/layouts/type'
import type { RouteParams, LocationQuery } from 'vue-router'

export interface ITagItem {
  title: string;
  path: string;
  fullPath: string;
  params?: RouteParams;
  query?: LocationQuery;
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
  /** 侧边栏模式 */
  layoutMode: ELayoutMode;
  /** 混合模式下顶部激活的菜单 */
  mixMenuActive: string;
}
