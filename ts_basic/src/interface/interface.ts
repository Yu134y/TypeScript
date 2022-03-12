// 宣言のマージ
// インターフェースの場合
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスの場合
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型(intersection)

// MaboDofuとRice両方の型を持つ変数を定義
const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// インターフェースの拡張
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

// インターフェースは型エイリアスも拡張できる
type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

// インターフェースでクラスに型を定義する
class Comic implements Book {
  constructor(public page: number, public title: string, private publishYear: string) {}

  getPublishYear() {
    return `${this.title}が発売されたのは${this.publishYear}年です。`
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2016年')
console.log(popularComic.getPublishYear()) // 鬼滅の刃が発売されたのは2016年です。
