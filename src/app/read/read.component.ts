import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  constructor(public dataService: DataService) {}
  items: Array<any> = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let a = this.dataService.getAll();
    console.log(a);
    a.subscribe(data => (this.items = data["_items"]));
  }
}
