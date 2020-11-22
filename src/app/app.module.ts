import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataService } from "./data.service";
import { ReadComponent } from "./read/read.component";
import { ReadService } from "./read/read.service";

import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent, ReadComponent],
  bootstrap: [AppComponent],
  providers: [DataService, ReadService]
})
export class AppModule {}
