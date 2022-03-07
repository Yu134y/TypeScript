export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)  // 他の型は入れられない
  console.log('Array array sample 1:', colors)

  // 型定義方法：T[]とArray<T>は同義
  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('10')  // 他の型は入れられない
  console.log('Array array sample 2:', even)

  // 合併型も使える
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)  // 型定義していない型は入れられない
  console.log('Array array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]として推論される
    _someArray.push('ABC') // (string | number)[]として推論される
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)  // 型定義していない型は入れられない
  console.log('Array array sample 4:', someArray)

  // JavaScriptの配列はconstで宣言してもミュータブル(書き換え可)
  const mutableNumbers: number[] = [1, 2, 3]
  mutableNumbers[2] = 4

  // イミュータブルな配列
  // readonlyでイミュータブル(書き換え不可)な配列/タプルを作れる
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push('git fetch')  // 追加不可
  // commands[2] = 'git pull'  // 代入不可
  console.log('Array array sample 5:', commands)

  // 他の書き方
  const numbers: ReadonlyArray<number> = [1, 2, 3]
  const names: Readonly<string[]> = ['Taro', 'Yu']
}
