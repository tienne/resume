import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../../common/material-components.module';

import { ThemeStorageService } from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';
import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  declarations: [ ThemeComponent ],
  providers: [
    StyleManagerService,
    ThemeStorageService
  ],
  exports: [ ThemeComponent ]
})
export class ThemeModule { }