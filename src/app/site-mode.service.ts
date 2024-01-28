import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

type TSiteModes = 'business' | 'engineer';

@Injectable({
  providedIn: 'root'
})
export class SiteModeService {
  public siteModeSubject$: BehaviorSubject<TSiteModes> = new BehaviorSubject<TSiteModes>('business');
  public siteMode$: Observable<TSiteModes> = this.siteModeSubject$.asObservable();
}
