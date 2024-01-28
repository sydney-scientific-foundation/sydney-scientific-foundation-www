import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SiteModeService } from '../site-mode.service';
import { WindowRef } from "./window.service";


@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.scss']
})
export class SlashComponent implements OnInit {
  safeHtml: SafeHtml;
  videoNumber: string;
  nativeWindow: Window;

  constructor(private sanitizer: DomSanitizer,
              public siteModeService: SiteModeService,
              private snackBar: MatSnackBar,
              private winRef: WindowRef) {
    this.videoNumber = '287747';
    this.safeHtml = sanitizer.bypassSecurityTrustHtml('<iframe style="width: 100%; height: 500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://asciinema.org/a/' + this.videoNumber + '/iframe"></iframe>');
    this.nativeWindow = winRef.getNativeWindow();
  }

  ngOnInit() {
  }

  coming_soon() {
    this.snackBar.open('Coming soon!', undefined,
      {
        duration: 2500,
      });
  }

  open(url: string) {
    this.nativeWindow.open(url, '_blank')!.focus();
  }
}
