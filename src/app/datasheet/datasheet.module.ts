import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasheetComponent } from './datasheet/datasheet.component';
import { DatasheetDetailComponent } from './datasheet-detail/datasheet-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SectionsModule } from '../_shared/sections/sections.module';
import { TreeviewModule } from 'ngx-treeview';

const routes: Routes = [
  {
    path: '',
    component: DatasheetComponent
  },
  {
    path: 'detail',
    component: DatasheetDetailComponent
  },
];

@NgModule({
  declarations: [DatasheetComponent, DatasheetDetailComponent],
  imports: [
    CommonModule,
    SectionsModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class DatasheetModule { }
