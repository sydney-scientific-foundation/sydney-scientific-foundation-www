import { Component } from '@angular/core';

import { SiteModeService } from '../site-mode.service';


@Component({
  selector: 'app-site-mode',
  templateUrl: './site-mode.component.html',
  styleUrls: ['./site-mode.component.scss']
})
export class SiteModeComponent {
  constructor(public siteModeService: SiteModeService) { }
}
