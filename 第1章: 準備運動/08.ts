/*
08. 暗号文
与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．
- 英小文字ならば(219 - 文字コード)の文字に置換
- その他の文字はそのまま出力
この関数を用い，英語のメッセージを暗号化・復号化せよ．
*/

const cipher = (str: string) => {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (isSmallAlphabet(str[i])) {
      res += String.fromCharCode(219 - str[i].charCodeAt(0))
    } else {
      res += str[i]
    }
  }
  return res
}

const isSmallAlphabet = (str: string) => {
  return /[a-z]/.test(str)
}

console.log('aiuそいjふぇ3934そsぽsdf')
console.log(cipher(cipher('aiuそいjふぇ3934そsぽsdf')))
console.log(cipher('aiuそいjふぇ3934そsぽsdf'))
