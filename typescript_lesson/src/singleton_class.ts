// シングルトンパターン：一つのクラスから一つのインスタンスしか作り出せないようにする
class Person {
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
  }
}

class Teacher extends Person {
  private static instance: Teacher;
  private constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }

  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Quill", 38, "Math");
    return Teacher.instance;
  }

  greeting() {
    console.log(
      `Hello! My name is ${this.name}. I'm ${this.age} years old. I teach ${this.subject}`
    );
  }
}

const teacher = Teacher.getInstance();
