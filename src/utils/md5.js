import CryptoJS from 'crypto-js/hmac-md5'

export default function cryptPW(str) {
  return CryptoJS(str, 'cotton').toString()
}
