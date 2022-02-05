function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy({ name: "hoge", age: 38 }, "name"));

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
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

// type TmpDatabase<T> = {
//   id: number;
//   data: T[];
// };

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;
interface Vegetables {
  tomato: string;
  pumpkin: string;
}
let tmp2: keyof Vegetables;
type MappedTypes = {
  -readonly [P in keyof Vegetables]?: P;
};

type ConditionalTypes = "tomato" extends string ? number : boolean;
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp3: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp4: NonNullable<string | null>;
