/*
06. 集合
“paraparaparadise”と”paragraph”に含まれる文字bi-gramの集合を，それぞれ, XとY6として求め，XとYの和集合，積集合，差集合を求めよ．さらに，’se’というbi-gramがXおよびYに含まれるかどうかを調べよ．
*/

const str6_1 = 'paraparaparadise'
const str6_2 = 'paragraph'

const X6 = str6_1.match(new RegExp(`.{1,2}`, 'g')) as string[]
const Y6 = str6_2.match(new RegExp(`.{1,2}`, 'g')) as string[]

// 和集合
const union6 = [...new Set([...X6, ...Y6])]
console.log('union6:', union6)

// 積集合
const intersection6 = [...new Set(X6.filter((x) => Y6.includes(x)))]
console.log('intersection6:', intersection6)

// 差集合
const difference6 = [...new Set(X6.filter((val) => !Y6.includes(val)))]
console.log('difference6', difference6)
