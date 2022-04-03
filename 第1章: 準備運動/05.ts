/*
05. n-gram
与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，”I am an NLPer”という文から単語bi-gram，文字bi-gramを得よ．
*/

const generateNGram = (sequence: string | string[], n: number) => {
  const res = []
  for (let i = 0; i < sequence.length; i++) {
    res.push(sequence.slice(i, i + n))
  }
  return res.filter((r) => r.length === n)
}

const str5 = 'I am an NLPer'
const words5 = 'I am an NLPer'.split(' ')

console.log(generateNGram(str5, 2))
console.log(generateNGram(str5, 3))
console.log(generateNGram(words5, 3))
console.log(generateNGram(words5, 2))
