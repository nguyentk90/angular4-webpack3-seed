import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { ShopRoutingModule, routedComponents } from './shop-routing.module';

@NgModule({
    imports: [ShopRoutingModule, SharedModule],
    declarations: [routedComponents],
    providers: []
})

export class ShopModule { }
