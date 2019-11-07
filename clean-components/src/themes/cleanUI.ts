import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class CleanUIModule {
}
