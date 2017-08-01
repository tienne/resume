import { NgModule } from '@angular/core';

import { SHARED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './core.common';
import { MaterialComponentsModule } from '../common/material-components.module';

@NgModule({
  imports: [
    MaterialComponentsModule,
    ...SHARED_MODULES,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS,
  ],
  exports: [
    ...COMPONENT_EXPORTS
  ]
})
export class CoreModule { }
