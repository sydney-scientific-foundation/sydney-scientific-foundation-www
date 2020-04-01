import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { SiteModeService } from '../site-mode.service';


@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.scss']
})
export class SlashComponent implements OnInit {
  safeHtml: SafeHtml;
  videoNumber: string;

  constructor(private sanitizer: DomSanitizer,
              public siteModeService: SiteModeService) {
    this.videoNumber = '287747';
    this.safeHtml = sanitizer.bypassSecurityTrustHtml('<iframe style="width: 100%; height: 500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://asciinema.org/a/' + this.videoNumber + '/iframe"></iframe>');
  }

  ngOnInit() {
  }
}
