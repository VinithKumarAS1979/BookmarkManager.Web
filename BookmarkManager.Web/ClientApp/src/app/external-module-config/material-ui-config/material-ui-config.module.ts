import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const modules: any[] = [
  MatTableModule
  , MatPaginatorModule
  , MatSelectModule
  , MatCardModule
  , MatCheckboxModule
  , MatProgressSpinnerModule
  , MatSortModule
  , MatDialogModule
  , MatDatepickerModule
  , MatNativeDateModule
  , MatRippleModule
  , MatInputModule
  , MatFormFieldModule
];

@NgModule({
  declarations: []
  , imports: modules
  , exports: modules
  , providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ]
})
export class MaterialUiConfigModule { }
