import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ProductModule { }
