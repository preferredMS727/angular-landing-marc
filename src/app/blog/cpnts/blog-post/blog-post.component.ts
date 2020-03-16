import { Component, OnInit, Input } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() postData: any;
  commentCounter: number;

  constructor() { }

  ngOnInit() {
    this.commentCounter = this.postData.comments.length;
  }

  ngAfterViewInit() {
    $('.post-entry').readmore({
      speed: 75,
      collapsedHeight: 125,
      moreLink: '<a class="more-link" href="#">Read more</a>',
      lessLink: '<a class="less-link" href="#">Read less</a>'
    });
  }

}
