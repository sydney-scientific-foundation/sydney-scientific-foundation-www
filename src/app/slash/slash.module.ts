import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FlexLayoutModule } from 'ngx-flexible-layout';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { WindowRef } from "./window.service";

@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    MatCardModule, MatButtonModule, MatSnackBarModule,
    FlexLayoutModule,
    SvgViewerModule, NavbarModule
  ],
  providers: [WindowRef]
})
export class SlashModule {
}
