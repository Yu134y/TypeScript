import { Foodable } from "./interfaces";
import { Score } from "./score";

// Foodsクラスの所属する一つ一つの食べ物の情報を管理する
export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle("food--active");
    const score = Score.getInstance();
    score.render();
  }
}
