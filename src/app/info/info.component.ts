import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageTitleService} from '../_services';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy  {
  pageTitle = 'info';
  constructor(
    private pageTitleService: PageTitleService,
  ) {
    this.pageTitleService.setPageTitle(this.pageTitle);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.pageTitleService.unsetPageTitle();
  }

}
