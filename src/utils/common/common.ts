import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 进度条的配置
nprogress.configure({
  showSpinner: false // 关闭右上角的圆圈
})

export function to<T>(promise: Promise<T>) {
  return promise.then((res: T)=> [null, res]).catch((err: Error)=> [err, null])
}

/**
 * 进度条开始
 */
export function progressStart() {
  nprogress.start()
}

/**
 * 进度条关闭
 */
export function progressDone() {
  nprogress.done()
}
