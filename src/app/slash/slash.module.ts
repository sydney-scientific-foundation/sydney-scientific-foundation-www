import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    FlexLayoutModule, SvgViewerModule, NavbarModule, MatCardModule, MatButtonModule, MatSnackBarModule
  ]
})
export class SlashModule {}
