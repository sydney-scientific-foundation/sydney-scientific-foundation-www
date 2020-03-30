import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { SiteModeService } from '../site-mode.service';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public siteModeService: SiteModeService) { }

  /*
  ngAfterViewInit() {
    switch (this.fabDiv.nativeElement.getAttribute('ng-reflect-ng-switch')) {
      case 'business':
        this.businessTooltip.toggle();
        break;
      case 'engineer':
      default:
        this.softwareEngineerTooltip.toggle();
    }
  }
   */
}
