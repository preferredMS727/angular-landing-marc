import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SectionsModule } from '../_shared/sections/sections.module';
import { TreeviewModule } from 'ngx-treeview';

const routes: Routes = [
  {
    path: '',
    component: RecordComponent
  },
  {
    path: 'detail',
    component: RecordDetailComponent
  },
];

@NgModule({
  declarations: [RecordComponent, RecordDetailComponent],
  imports: [
    CommonModule,
    SectionsModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class RecordModule { }
