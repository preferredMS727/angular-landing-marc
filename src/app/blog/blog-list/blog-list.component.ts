import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initialize();
  }
  // Post Slider
  initialize() {
    if ($('.post-images-slider').length > 0) {
      $('.post-images-slider').flexslider({
        animation: "slide",
        smoothHeight: true,
      });
    }
  }

}
