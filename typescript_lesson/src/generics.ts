// ジェネリクスを使って、型を引数として受け取る
function copy<T>(value: T): T {
  return value;
}
console.log(copy<string>("hello"));
console.log(copy("hello").toUpperCase); // 何も書かなかったら型推論してくれる

function copy1<T, U>(value: T): T {
  return value;
}
console.log(copy1({ name: "Quill" })); // 二つ目の型は型推論されるとunknownになる

// extendsを使って型パラメータに制約をつける方法
function copy2<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy2({ name: "Quill" }));
// console.log(copy2({ age: "Quill" }));  // 制約をつけているので違う型が来たらエラーになる

// keyofを使ってオブジェクトのキーのユニオン型を作成する方法
// type K = keyof { name: string; age: number };  // type K = "name" | "age"
function copy3<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key]; // keyof Tを指定しているのでTのkeyにアクセスできる
  return value;
}
console.log(copy3({ name: "Quill", age: 38 }, "name"));

// Classに対してジェネリクスを使用する方法
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get()); // ["Apple", "Grape"]

// interfaceに対してジェネリクスを使用する方法
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

// typeも同様
// type TmpDatabase<T> = {
//   id: number;
//   data: T[];
// };

// 内蔵されているジェネリクス型であるUtility型(importしなくても使えるライブラリ)
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>; // 全てオプショナルプロパティにする
type ReadTodo = Readonly<Todo>; // 全てreadonlyにする

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

// デフォルトの型パラメータを指定する方法
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

// 型のfor文であるMapped Types
interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}
let tmp2: keyof Vegetables;
type MappedTypes = {
  -readonly [P in keyof Vegetables]?: P; // -readonlyにすると既存のreadonlyが消える
};

// 型のif文であるConditional Types
type ConditionalTypes = "tomato" extends string ? number : boolean; // "tomato"型がstring型に入れられればnumber型、入れられなければboolean型になる
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean; // inferは型推論をしてくれる
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp3: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp4: NonNullable<string | null>;
