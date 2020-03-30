import { AfterViewInit, Injectable, ViewChild } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { MatTooltip } from '@angular/material/tooltip';


@Injectable({
  providedIn: 'root'
})
export class SiteModeService {
  public siteModeSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('business');
  public siteMode$: Observable<string> = this.siteModeSubject$.asObservable();
}
