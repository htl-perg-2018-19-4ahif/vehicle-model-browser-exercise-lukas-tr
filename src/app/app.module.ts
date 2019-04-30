import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ModelsPageComponent } from "./models-page/models-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [AppComponent, AboutPageComponent, ModelsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
