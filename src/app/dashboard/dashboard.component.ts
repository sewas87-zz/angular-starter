import { Component, OnDestroy, OnInit } from '@angular/core';
import {PageTitleService, PostsService} from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  pageTitle = 'Dashboard';
  postsList: object;
  constructor(
    private pageTitleService: PageTitleService,
    private postsService: PostsService,

  ) {
    this.pageTitleService.setPageTitle(this.pageTitle);
  }

  ngOnInit() {
    this.postsService.getPostList().subscribe(data => {
      console.log(data);
      this.postsList = data;
    });
  }

  ngOnDestroy() {
    this.pageTitleService.unsetPageTitle();
  }
}
