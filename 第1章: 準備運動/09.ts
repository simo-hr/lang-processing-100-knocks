/*
09. Typoglycemia
スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．適当な英語の文（例えば”I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind .”）を与え，その実行結果を確認せよ．
*/

const function9 = (str: string) => {
  return str
    .replace(',', '')
    .replace('.', '')
    .split(' ')
    .map((v) => {
      if (v.length <= 4) return v
      return v[0] + shuffleStrArray(v.slice(1, v.length - 1).split('')).join('') + v[v.length - 1]
    })
    .join(' ')
}

const shuffleStrArray = (str: string[]): string[] => {
  for (let i = str.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[str[i], str[j]] = [str[j], str[i]]
  }
  return str
}

const str9 =
  'I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind .'

console.log(function9(str9))
