export interface ICommonState {
  /** 菜单折叠状态 */
  isCollapse: boolean;
  /** 主题 */
  theme: string;
  /** 锁屏状态 */
  isLock: boolean;
  /** 锁屏密码 */
  lockPasswd: string;
}
