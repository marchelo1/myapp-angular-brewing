import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
// Adding FormModule that allows us to ngModel is working
import { FormsModule } from "@angular/forms";
// Adding HttpClientModule which will allow us to communicate with a public API.
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Importing FromsModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
