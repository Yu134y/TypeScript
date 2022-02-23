interface Nameable {
  readonly name: string;
  nickName?: string;
}

const nameable: Nameable = {
  name: "Quill",
  // nickName: 'Quilla',  あってもなくてもいい
};

// typeも同じように継承できる
interface Human extends Nameable {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};

class Developer implements Human {
  // Humanにないパラメータも追加できる
  // クラスの中にはinterfaceのreadonlyは適応されない
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}
  // パラメータにも?を使える
  greeting(message?: string): void {
    if (message) {
      message.toUpperCase();
    }
    console.log(message);
  }
}

// 構造的部分型
const tmpDeveloper = {
  name: "Quill",
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};
const user: Human = tmpDeveloper;

// interfaceで関数の型を表現する方法
// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};
