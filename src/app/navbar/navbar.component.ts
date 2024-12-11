import { Component } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

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
