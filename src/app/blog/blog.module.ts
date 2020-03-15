import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SectionsModule } from '../_shared/sections/sections.module';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'detail',
    component: BlogDetailComponent
  }
];

@NgModule({
  declarations: [ BlogListComponent, BlogDetailComponent ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
