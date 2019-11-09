import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/selects/select/select.component";
import { SelectMultiComponent } from "./components/selects/select-multi/select-multi.component";
import { FileAreaComponent } from "./components/file-upload/components/area/file-area.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { FileInputComponent } from "./components/file-upload/components/input/file-input.component";
import { ImageComponent } from "./components/image/image.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { DataTableComponent } from "./components/datatable/datatable.component";
import { FieldGroupComponent } from "./components/field-group/field-group.component";
import { FieldComponent } from "./components/field/field.component";
import { TextErrorComponent } from "./components/text-error/text-error.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { LogoComponent } from "./components/logo/logo.component";
import { TextAreaComponent } from "./components/textarea/text-area.component";
import { TextComponent } from "./components/text/text.component";
import { TitleComponent } from "./components/title/title.component";
import { FormComponent } from "./components/form/form.component";
import { InputComponent } from "./components/input/input.component";
import { ControlDirective } from "./directives/control.directive";

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ControlDirective,
    InputComponent,
    FormComponent,
    TitleComponent,
    TextComponent,
    TextAreaComponent,
    LogoComponent,
    CheckboxComponent,
    TextErrorComponent,
    FieldComponent,
    FieldGroupComponent,
    ButtonComponent,
    DataTableComponent,
    ProfileComponent,
    ImageComponent,
    FileInputComponent,
    FileUploadComponent,
    FileAreaComponent,
    SelectMultiComponent,
    SelectComponent,
  ],
  exports: [
    ControlDirective,
    InputComponent,
    FormComponent,
    TitleComponent,
    TextComponent,
    TextAreaComponent,
    LogoComponent,
    CheckboxComponent,
    TextErrorComponent,
    FieldComponent,
    FieldGroupComponent,
    ButtonComponent,
    DataTableComponent,
    ProfileComponent,
    ImageComponent,
    FileInputComponent,
    FileUploadComponent,
    FileAreaComponent,
    SelectMultiComponent,
    SelectComponent,
  ],
  providers: [],
})
export class CleanUIModule {
}
