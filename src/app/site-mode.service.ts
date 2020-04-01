import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SiteModeService {
  public siteModeSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('business');
  public siteMode$: Observable<string> = this.siteModeSubject$.asObservable();
}
