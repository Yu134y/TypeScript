// クラスを定義してオブジェクトを作成する方法
class Person {
  // インスタンスに紐づかない(アクセスするにはクラス名.)
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age >= 20) return true;
    return false;
  }

  // フィールド
  name: string;

  // constructor関数(インスタンスを作成したタイミングで実行される関数、初期化メソッド)
  constructor(initName: string) {
    this.name = initName;
  }

  // メソッド
  // greeting() {
  //   console.log(`Hello! My name is ${this.name}.`);
  // }

  // メソッドの中でthisが使われているとき第一引数にthisを渡す
  // greeting(this: { name: string }) {
  //   console.log(`Hello! My name is ${this.name}.`);
  // }

  // クラスを型として使う方法
  // クラスを作成した時点でそのクラスの型が作成される、その型はそのクラスの中でも使える
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

const quill = new Person("Quill");
console.log(quill); // Person {name: "Quill"}
quill.greeting(); // Hello! My name is Quill.

const anotherQuill = {
  name: "anotherQuill", // nameを渡す
  greeting() {}, // Personはnameとgreetingを含んだ型なのでgreetingを書かないとエラーになる
  anotherGreeting: quill.greeting,
};
// thisは定義された時ではなく呼び出されたときに決まる。anotherQuill内で呼び出されたgreetingのthisはanotherQuillを示しているためnameがなくundefinedになる(anotherQuill内にnameがない場合)
anotherQuill.anotherGreeting(); // Hello! My nama is undefined.
