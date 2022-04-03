/*
02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
*/

const patrolCar = 'パトカー'
const taxi = 'タクシー'
let str2 = ''
for (let i = 0; i < 4; i++) {
  str2 += patrolCar[i] + taxi[i]
}
console.log(str2)
