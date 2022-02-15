// インターセクション型を定義する方法
interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

// type ENginnerBlogger = Engineer & Blogger;
interface ENginnerBlogger extends Engineer, Blogger {}
const quill: ENginnerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 条件文を使って型を絞り込む3つのType guard(typeof、in、instanceof)
// typeof
function toUpperCase(x: string): string; // 関数のオーバーロード(上から順番に適応される)
function toUpperCase(x: number): number; // 関数のオーバーロード
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}
// 関数のオーバーロードを使うことで、戻り値の型を正しくTypeScriptに伝えられる
const upperHello = toUpperCase("hello");

// 関数型のインターセクションはオーバーロードになる
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}

interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

// 関数型のユニオン型はパラメータがインターセクション型、戻り値がユニオン型になる
interface FuncC {
  (a: number): number;
}

interface FuncD {
  (a: string): string;
}
let unionFunc: FuncC | FuncD;
unionFunc = function (a: string) {
  return "hi";
};

// in
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name); // 両方持っているnameにのみアクセスできる
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  // タグ付きUnionを使って型を絞り込む方法
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  // instanceof
  if (pet instanceof Bird) {
    pet.fly();
  }
}

havePet(new Bird());

// 型アサーションを使って手動で型を上書きする方法
const input = <HTMLInputElement>document.getElementById("input");
// const input = document.getElementById("input") as HTMLInputElement;
input.value = "initial input value";

// !(Non-null assertion operator)を使って、nullじゃないと言い切る方法
const input2 = document.getElementById("input")!;

// インデックスシグネチャを使用して柔軟なオブジェクトを作る方法
interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: "Quill",
  role: "web",
};

// Optional Chaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing(undefinedだったら違うものを入れる)
const userData = downloadedData.user ?? "no-user";

// LookUp型を使ってオブジェクトのメンバーの型を取得する方法
type id = DownloadedData["id"];

// 型の互換性
// Enum型とnumber型は互換性がある
enum Color {
  RED,
  BLUE,
}
class AdvancedPerson {
  name: string = "Peter";
  age: number = 35;
}
class AdvancedCar {
  name: string = "Prius";
  age: number = 5;
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source; // targetの方のパラメータが多かったらエラーになる、少なかったらエラーにならない(二つ目は無視される)

// レストパラメータに配列やタプルを指定する方法
// 配列
function advancedFn(...args: readonly number[]) {}
advancedFn(0, 3, 3, 3, 3, 3);
// タプル
function advancedFn2(
  ...args: readonly [number, string, boolean?, ...number[]]
) {}
advancedFn2(0, "hi", true, 3, 3, 3, 3);

// constアサーション(定数になる)
const milk = "milk" as const;
let drink = milk;
const array = [10, 20] as const;
const peter = {
  name: "Peter",
  age: 38,
} as const;

// 型の中でtypeofを使うと便利
type PeterType = typeof peter;
