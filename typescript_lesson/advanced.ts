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
const hoge: ENginnerBlogger = {
  name: "hoge",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase("hello");

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
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
  if (pet instanceof Bird) {
    pet.fly();
  }
}

havePet(new Bird());

const input = <HTMLInputElement>document.getElementById("input");
input.value = "initial input value";

interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: "hoge",
  role: "web",
};

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
const userData = downloadedData.user ?? "no-user";
type id = DownloadedData["id"];
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
target = source;
