import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { TogglePipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //PIPES
    TogglePipe,
    CanFlyPipe,
  ],
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
