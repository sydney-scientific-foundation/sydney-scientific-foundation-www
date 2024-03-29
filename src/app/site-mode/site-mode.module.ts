import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from 'ngx-flexible-layout';

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
