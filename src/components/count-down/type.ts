export interface ICountDownProps {
  /** 显示的文本 */
  text?: string;
  /** 倒计时时间 */
  time?: number | string;
  /** 基础样式 */
  baseClass?: string;
}

export type ICountDownEmit = {
  /** 倒计时开始 */
  onStart: [];
  /** 倒计时结束 */
  onEnd: [];
}
