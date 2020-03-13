import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss']
})
export class RecordDetailComponent implements OnInit {

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
