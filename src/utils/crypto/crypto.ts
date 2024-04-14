import aes from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'
import Pkcs7 from 'crypto-js/pad-pkcs7'

// 注意key和iv为16进制，不能为非16进制字符
const key = '86f1fda459fa47c7'
const iv = '%6797%8fbe%6d6a'

// 加密
export function Encrypt(val: string) {
  return aes.encrypt(val, Utf8.parse(key), {
    iv: Utf8.parse(iv),
    padding: Pkcs7
  }).toString()
}

// 解密
export function Decrypt(val: string) {
  const decrypted = aes.decrypt(val, Utf8.parse(key), {
    iv: Utf8.parse(iv),
    padding: Pkcs7
  })
  return decrypted.toString(Utf8)
}

export default {
  Encrypt,
  Decrypt
}
