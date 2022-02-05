function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Component(template: string, selector: string) {
  return function (constructor: { new (...args: any[]): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = instance.name;
    }
    return class extends constructor {};
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}
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

@Component("<h1>{{ name }}</h1>", "#app")
@Logging("Logging user")
class User {
  @PropertyLogging
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}

const user = new User();
