// abstract:継承にのみ使えるクラス
abstract class Person {
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  explainJob() {
    console.log(`I am a teacher and I teach ${this.subject}.`);
  }
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }
}

const teacher = new Teacher("Quill", 38, "Math");
teacher.greeting();
