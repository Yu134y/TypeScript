"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logging(message) {
    return function Logging(constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector("h1").textContent = instance.name;
        }
        return class extends constructor {
        };
    };
}
function PropertyLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target, propertyKey, descriptor) {
    console.log("MethodLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function AccessorLogging(target, propertyKey, descriptor) {
    console.log("AccessorLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
let User = class User {
    constructor() {
        this.name = "Quill";
        console.log("User was created!");
    }
};
__decorate([
    PropertyLogging
], User.prototype, "name", void 0);
User = __decorate([
    Component("<h1>{{ name }}</h1>", "#app"),
    Logging("Logging user")
], User);
const user = new User();
