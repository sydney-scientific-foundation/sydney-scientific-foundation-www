import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from 'ng-flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SiteModeComponent } from './site-mode.component';


@NgModule({
  declarations: [SiteModeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [SiteModeComponent]
})
export class SiteModeModule {}
