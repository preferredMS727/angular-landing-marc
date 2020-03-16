import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-datasheet-detail',
  templateUrl: './datasheet-detail.component.html',
  styleUrls: ['./datasheet-detail.component.scss']
})
export class DatasheetDetailComponent implements OnInit {

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
