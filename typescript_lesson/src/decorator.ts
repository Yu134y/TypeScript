// デコレータを使ってクラスに関数を適応する方法
function Logging(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logging // デコレータはインスタンスの生成時ではなくクラスの定義時に実行される
class User1 {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
const user1 = new User1();

// デコレータファクトリを使用して、デコレータに引数を渡す方法
function Logging2(message: string) {
  return function Logging(constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

@Logging2("Logging User")
class User2 {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}

// デコレータを使って簡易版のフレームワークを作成する
function Component(template: string, selector: string) {
  return function (constructor: { new (...args: any[]): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = instance.name;
    }
  };
}

@Logging2("Logging User")
@Component("<h1>{{ name }}</h1>", "#app") // デコレータは下から上に実行される
class User3 {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}

// 戻り値にクラスを指定して、新しいクラスを作り出す方法
function Component2(template: string, selector: string) {
  console.log("Component Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Component");
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User4 {
  name = "Quill";
  constructor(public age: number) {
    console.log("User was created!");
  }
}
const user4 = new User4(32);

// 「プロパティ―デコレータを使う方法」と「prototype」について
function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User5 {
  @PropertyLogging
  name = "Quill";
  constructor(public age: number) {
    console.log("User was created!");
  }
  greeting() {
    console.log("Hello!");
  }
}

// 「メソッドデコレータを使う方法」と「PropertyDescription」について
function MethodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("MethodLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User6 {
  @PropertyLogging
  name = "Quill";
  constructor(public age: number) {
    console.log("User was created!");
  }
  @MethodLogging
  greeting() {
    console.log("Hello!");
  }
}

// アクセサーデコレータ
function AccessorLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("AccessorLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User7 {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @MethodLogging
  greeting() {
    console.log("Hello!");
  }
}

// 戻り値を使って、実践的なメソッドデコレータを使う方法
function enumerable(isEnumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User8 {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting() {
    console.log("Hello!");
  }
}

// パラメータデコレータ
function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@Logging2("Logging User")
@Component2("<h1>{{ name }}</h1>", "#app")
class User9 {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }
}
