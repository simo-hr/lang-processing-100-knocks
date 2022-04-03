/*
07. テンプレートによる文生成
引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y=”気温”, z=22.4として，実行結果を確認せよ．
*/

const X7 = 12
const Y7 = '気温'
const Z7 = 22.4

const function7 = (x: string | number, y: string | number, z: string | number) => {
  return `${x.toString()}時の${y.toString()}は${z.toString()}`
}

console.log(function7(X7, Y7, Z7))
