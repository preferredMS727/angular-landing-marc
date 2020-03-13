import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspirationListComponent } from './inspiration-list/inspiration-list.component';
import { InspirationDetailComponent } from './inspiration-detail/inspiration-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InspirationListComponent
  },
  {
    path: 'detail',
    component: InspirationDetailComponent
  },
];

@NgModule({
  declarations: [
    InspirationListComponent,
    InspirationDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InspirationModule { }
