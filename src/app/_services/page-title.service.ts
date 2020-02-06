import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PageTitleService {

    private currentTitleSubject: BehaviorSubject<any>;
    public currentTitle: Observable<any>;

    constructor() {
      this.currentTitleSubject = new BehaviorSubject('');
      this.currentTitle = this.currentTitleSubject.asObservable();
    }

    public get currentTitleValue() {
      return this.currentTitleSubject.value;
    }

    setPageTitle(title: string) {
      this.currentTitleSubject.next(title);
    }

    unsetPageTitle(){
      this.currentTitleSubject.next('');
    }
}
