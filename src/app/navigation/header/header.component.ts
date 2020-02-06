import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageTitleService } from '../../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  title: string;

  constructor(
    private pageTitleService: PageTitleService
  ) {
    this.pageTitleService.currentTitle.subscribe( data => this.title = data);
  }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
