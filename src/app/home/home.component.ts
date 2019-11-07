import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // defined the clickCounter property and set it to 0
  clickCounter: number = 0;
  name: string = "";

  constructor() {}

  ngOnInit() {}

  // Increment the clickCounter by 1
  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
}
