import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { SiteModeComponent } from './site-mode.component';


@NgModule({
  declarations: [SiteModeComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [SiteModeComponent]
})
export class SiteModeModule {}
