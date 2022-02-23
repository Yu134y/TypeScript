var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレータを使ってクラスに関数を適応する方法
function Logging(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
var User = /** @class */ (function () {
    function User() {
        this.name = "Quill";
        console.log("User was created!");
    }
    User = __decorate([
        Logging // デコレータはインスタンスの生成時ではなくクラスの定義時に実行される
    ], User);
    return User;
}());
var user1 = new User();
// デコレータファクトリを使用して、デコレータに引数を渡す方法
function Logging2(message) {
    return function Logging(constructor) {
        console.log(message);
        console.log(constructor);
    };
}
var User = /** @class */ (function () {
    function User() {
        this.name = "Quill";
        console.log("User was created!");
    }
    User = __decorate([
        Logging2("Logging User")
    ], User);
    return User;
}());
// デコレータを使って簡易版のフレームワークを作成する
function Component(template, selector) {
    return function (constructor) {
        var mountedElement = document.querySelector(selector);
        var instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector("h1").textContent = instance.name;
        }
    };
}
var User = /** @class */ (function () {
    function User() {
        this.name = "Quill";
        console.log("User was created!");
    }
    User = __decorate([
        Component("<h1>{{ name }}</h1>", "#app"),
        Logging2("Logging User")
    ], User);
    return User;
}());
