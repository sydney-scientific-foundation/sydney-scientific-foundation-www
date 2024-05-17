import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SiteModeService } from '../site-mode.service';
import { WindowRef } from "./window.service";


@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.scss']
})
export class SlashComponent implements OnInit {
  nativeWindow: Window;

  constructor(public siteModeService: SiteModeService,
              private snackBar: MatSnackBar,
              winRef: WindowRef) {
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
