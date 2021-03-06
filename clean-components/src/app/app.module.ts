import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleanUIModule } from "../themes/cleanUI";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CleanUIModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
