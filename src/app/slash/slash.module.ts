import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { WindowRef } from "./window.service";

@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    SvgViewerModule, NavbarModule, MatCardModule, MatButtonModule, MatSnackBarModule
  ],
  providers: [WindowRef]
})
export class SlashModule {}
