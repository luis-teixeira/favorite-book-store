import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIHeaderComponent } from "./ui-header/ui-header.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UIHeaderComponent,
    LoadingComponent
  ],
  exports: [
    UIHeaderComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
