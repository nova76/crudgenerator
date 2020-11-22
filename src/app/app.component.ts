import { Component, VERSION } from "@angular/core";
import { ReadService } from "./read/read.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  title = "my-pets";

  constructor(private readService: ReadService) {}

  read() {
    this.readService.open();
  }
}
