class Person {
  // readonly修飾子(クラス内外問わず書き換えられない、読み取り専用)
  readonly name: string;
  // private修飾子(クラスの中からしかアクセスできない)
  // private age: number;
  // protected修飾子(クラス、継承先のクラスの中からしかアクセスできない)
  protected age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  // 初期化の処理を省略化する方法
  // constructor(public name: string, private age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
  }
}
const quill = new Person("Quill", 38);
// quill.age = 30  クラスの外の為アクセスできない
quill.greeting();
// quill.name = 'hoge'  読み取り専用のため書き換えられない

// 他のクラスの機能を継承する方法
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(
      `Hello! My name is ${this.name}. I'm ${this.age} years old. I teach ${this.subject}`
    );
  }
}
const teacher = new Teacher("Jack", 28, "Math");
teacher.greeting();
