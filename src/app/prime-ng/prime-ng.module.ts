import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CardModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    FieldsetModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}
