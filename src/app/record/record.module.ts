import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class RecordModule { }
