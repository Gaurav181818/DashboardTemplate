import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy,AfterViewInit} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'

  
})
export class MainNavComponent implements OnDestroy, AfterViewInit  {
mobileQuery:  MediaQueryList;

private _mobileQueryListener: () => void;

constructor(
  changeDetectorRef: ChangeDetectorRef,
  media: MediaMatcher,

) {
  this.mobileQuery = media.matchMedia('(min-width: 1024px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
}

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}
ngAfterViewInit() {}
}

