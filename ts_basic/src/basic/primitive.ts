export default function primitiveSample() {
  let name: string = 'yu'
  // name = 123  string型に他の型は代入できない
  console.log('primitive sample 1:', typeof name, name)

  let age: number = 22
  // age = "22"  number型に他の型は代入できない
  console.log('primitive sample 2:', typeof age, age)

  let isSingle: boolean = true
  // isSingle = "foo"  boolean型に他の型は代入できない
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  // 判定式の結果も代入できる
  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
