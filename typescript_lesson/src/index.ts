// 型注釈(type annotation)
// boolean型
let hasValue: boolean = true;
// number型
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
// string型
let double: string = "hello";
let back: string = `hello`;

// 型推論（基本的に型推論にする）
let hasValue2 = true;
let count2 = 10;
let float2 = 3.14;
let negative2 = -0.12;
let double2 = "hello";
let back2 = `hello`;

// オブジェクトに型をつける(見本の為、型注釈しているが基本的には型推論にする)
const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};
console.log(person.age);
// object、{}は全般的なオブジェクトを表している。
// const person: object= {
//   name: "Jack",
//   age: 21,
// };
// console.log(person.name)  keyにアクセスしようとするとエラーになる
// ネストしても基本は同じ
const person2 = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

// 配列に型をつける(見本の為、型注釈しているが基本的には型推論にする)
const fruits: string[] = ["Apple", "Banana", "Grape"];
// fruits.push(21)  string型以外を入れようとするとエラーになる
const fruit = fruits[0];
// fruit.forEach()  string型にないメソッドを使おうとするとエラーになる

// Tuple(配列の厳しいバージョン、型注釈必須)
// 型注釈で指定した型、個数しか入れられない
const book: [string, number, boolean] = ["business", 1500, false];
// 初期値を代入するときは厳しい
// const book: [string, number, boolean] = ["business", 1500, false, 'foo'];  エラー
// それ以降は緩い
book.push(21);
// しかしそれを参照することはできない
// console.log(book[3]);  エラー

// Enum(列挙型) 特定のまとまったグループのみを受け入れる
enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
// =をつけないと0から順番に番号がふられる
enum CoffeeSize2 {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}
console.log(CoffeeSize2.SHORT); // 0

// any型(なんでも入る)
let anything: any = true;
anything = "hello";
anything = ["hello", 33, true];
anything = {};
anything.foo = "foo";
let banana = "banana";
banana = anything;

// Union型(複数の型を入れられる)
let unionType: number | string = 10;
// unionType.toUpperCase()  この時点ではnumber型しか入っていないのでstring型のメソッドは使えない
unionType = "hello";
unionType.toUpperCase(); // string型が入ったことでstring型のメソッドが使える
// union型の配列
let unionTypes: (number | string)[] = [21, "hello"];

// Literal型
// constを使うことでLiteral型になる
const apple: "apple" = "apple";
// const apple2: "apple" = "hello";  エラー
const zero: 0 = 0;
let clothSize: "small" | "medium" | "large" = "large";
// Union型とLiteral型を組み合わせることでEnum的な役割を果たすことができる
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "large",
};
cloth.size = "small";

// typeエイリアス
type ClothSize = "small" | "medium" | "large";
const cloth2: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "large",
};

// 関数に型をつける
// パラメータは型推論されない(戻り値の方はされるが基本的にはつけておいた方が良い)
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 2);
// add(3, "hello");  エラー

// void型(関数がなにも返さないときに使う)
function sayHello(): void {
  console.log("Hello!"); // undefinedが返る
}

// undefined型とnull型
// undefinedはよっぽどのことがない限り使わない
let tmp: undefined = undefined;
let tmp2: undefined = null;
// let tmp3: undefined = 10;  エラー
let tmpNull: null = null;
let tmpNull2: null = undefined;
// let tmpNull3: null = 10;  エラー

// 関数を保持する変数に型をつける
const anotherAdd: (n1: number, n2: number) => number = function (
  num1: number,
  num2: number
): number {
  return num1 + num2;
};
// 型推論(どちらかが型注釈されていればもう一方は型推論される)
const anotherAdd2 = function (num1: number, num2: number): number {
  return num1 + num2;
};
const anotherAdd3: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2;
};
// アロー関数
const doubleNumber: (num: number) => number = (num) => num * 2;

// callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => {
  return doubleNum;
});

// unknown型
// unknown型は色々入れられるけどその変数を代入しようとするとエラーになる
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
// text = unknownInput  エラー
// if文を使うことでエラーを出さずに使用できる
if (typeof unknownInput == "string") {
  text = unknownInput;
}

// never型
function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error")); // なにも返らない
