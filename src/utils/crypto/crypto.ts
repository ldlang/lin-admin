import CryptoJS from 'crypto-js'

// 注意key和iv为16进制，不能为非16进制字符
const key = '86f1fda459fa47c7'
const iv = '%6797%8fbe%6d6a'

// 加密
export function Encrypt(val: string) {
  return CryptoJS.AES.encrypt(val, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}

// 解密
export function Decrypt(val: string) {
  const decrypted = CryptoJS.AES.decrypt(val, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

export default {
  Encrypt,
  Decrypt
}
